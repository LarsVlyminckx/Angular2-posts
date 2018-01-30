"use strict";
var Comment = (function () {
    function Comment(name) {
        this.name = name;
    }
    Comment.prototype.toForm = function () {
        return "name=" + this.name;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map