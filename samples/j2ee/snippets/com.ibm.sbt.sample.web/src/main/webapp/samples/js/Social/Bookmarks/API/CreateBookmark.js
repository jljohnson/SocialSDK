require(["sbt/connections/BookmarkService", "sbt/dom", "sbt/json"], 
    function(BookmarkService, dom, json) {
        var bookmarkService = new BookmarkService();  
        var bookmark = bookmarkService.newBookmark(); 
        var now = new Date();
        bookmark.setTitle("Bookmark at " + now.getTime());
        bookmark.setUrl("ibm.com");
        var promise = bookmarkService.createBookmark(bookmark);
        promise.then(
    		function(bookmark) {
                dom.setText("json", json.jsonBeanStringify(bookmark.toJson()));
            },
            function(error) {
                dom.setText("json", json.jsonBeanStringify(error));
            }
        );
    }
);