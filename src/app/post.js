"use strict";
var Post = (function () {
    function Post(title, body) {
        this.title = title;
        this.body = body;
    }
    Post.prototype.toForm = function () {
        return "title=" + this.title + "&body=" + this.body;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map