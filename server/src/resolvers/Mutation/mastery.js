const {
  checkAuth,
} = require("../../utils");

const {
  minMax,
} = require("../../logic/utils");

const {
  AuthError,
  MasteryNotFound,
} = require("../../errors");

const {
  MASTERY_STATUS_ACTIVE,
  MASTERY_STATUS_INACTIVE,
  MASTERY_MIN_SCORE,
  MASTERY_MAX_SCORE,
  USER_TYPE_STUDENT,
  USER_TYPE_MODERATOR,
  USER_TYPE_ADMIN,
  USER_STATUS_NORMAL,
} = require("../../constants");

const mastery = {
  /**
   * Activate a mastery. Only the owning student (or moderators or better) can do this.
   * @param parent
   * @param args
   *        masteryid: ID!
   * @param ctx
   * @param info
   * @returns Mastery!
   */
  async activateMastery(parent, args, ctx, info) {
    return changeMasteryStatus(
      parent,
      args,
      ctx,
      info,
      MASTERY_STATUS_ACTIVE,
      "activateMastery",
    );
  },


  /**
   * Deactivate a mastery. Only the owning student (or moderators or better) can do this.
   * @param parent
   * @param args
   *        masteryid: ID!
   * @param ctx
   * @param info
   * @returns Mastery!
   */
  async deactivateMastery(parent, args, ctx, info) {
    return changeMasteryStatus(
      parent,
      args,
      ctx,
      info,
      MASTERY_STATUS_INACTIVE,
      "deactivateMastery",
    );
  },


  /**
   * Give a Mastery ID and a score you want to increase/decrease the Mastery score by.
   * Only the owning student (or moderators or better) can do this.
   * @param parent
   * @param args
   * @param ctx
   * @param info
   * @returns {Promise<void>}
   */
  async addMasteryScore(parent, args, ctx, info) {
    const callingUserData = await checkAuth(ctx, {
      type: [USER_TYPE_STUDENT, USER_TYPE_MODERATOR, USER_TYPE_ADMIN],
      status: USER_STATUS_NORMAL,
      action: "addMasteryScore",
    });

    // Get the target Mastery row.
    const targetMasteryData = await ctx.db.query.mastery(
      { where: { id: args.masteryid } },
      `{
        score
        parent {
          parent {
            student {
              id
            }
          }
        }
      }`,
    );

    if (!targetMasteryData) {
      throw new MasteryNotFound(args.masteryid);
    }

    // A student can change their Mastery and moderators or better can as well.
    if (callingUserData.id !== targetMasteryData.parent.parent.student.id &&
      callingUserData.type < USER_TYPE_MODERATOR) {
      throw new AuthError(null, "addMasteryScore");
    }

    // Calculate the new score.
    const newScore = minMax(
      MASTERY_MIN_SCORE,
      targetMasteryData.score + args.score,
      MASTERY_MAX_SCORE,
    );

    // Fire the mutation!
    return ctx.db.mutation.updateMastery({
      where: { id: args.masteryid },
      data: { score: newScore },
    }, info);
  },
};


/**
 * Change the status of a Mastery. Only the owning student (or moderators or better) can do this.
 * @param parent
 * @param args
 *        masteryid: ID!
 * @param ctx
 * @param info
 * @param changeStatus
 * @param actionName
 * @returns Mastery!
 */
async function changeMasteryStatus(parent, args, ctx, info, changeStatus, actionName) {
  const callingUserData = await checkAuth(ctx, {
    type: [USER_TYPE_STUDENT, USER_TYPE_MODERATOR, USER_TYPE_ADMIN],
    status: USER_STATUS_NORMAL,
    action: actionName,
  });

  const targetMasteryData = await ctx.db.query.mastery({ where: { id: args.masteryid } }, `
      {
        id
        status
        parent {
          parent {
            student {
              id
            }
          }
        }
      }
    `);

  // Check the Mastery exists.
  if (targetMasteryData === null) {
    throw new MasteryNotFound(args.masteryid);
  }

  // A student can change the status of a Mastery and moderators or better can as well.
  if (callingUserData.id !== targetMasteryData.parent.parent.student.id &&
    callingUserData.type < USER_TYPE_MODERATOR) {
    throw new AuthError(null, actionName);
  }

  // Perform the update.
  return ctx.db.mutation.updateMastery({
    where: { id: args.masteryid },
    data: {
      status: changeStatus,
    },
  }, info);
}

module.exports = { mastery };
