let dict = "123456789".split(""),
  alph = "ABCDEFGHI".split("");

module.exports = {
  untether: function untether(board) {
    return JSON.parse(JSON.stringify(board));
  },
  //--------------------------------Utility Func-----------------------------
  wait: function wait(ms, msg, changeNarration) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      changeNarration(msg);
    });
  },

  //calculate possibilites for [y, x] coordinates
};
