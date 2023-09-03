const module = (() => {
    return {
        open_book: (book_id, url, params) => {
            controller.action("open", { 
                "filename": book_id,
                "root-path": "catalog@data",
                "dir-path": "books",
                "format": "bxp",
                "url": url
            })
        },
    }
})();

__MODULE__ = module;
