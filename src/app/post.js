"use strict";
var Post = (function () {
    function Post(index, name) {
        this.index = index;
        this.name = name;
    }
    Post.prototype.toForm = function () {
        return "index=" + this.index + "&name=" + this.name;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map