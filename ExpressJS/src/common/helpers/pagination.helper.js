export const paginationValidate = (query) => {
    let { page, pageSize } = query;

    const pageDefault = 1;
    const pageSizeDefault = 3;
    const maxPageSize = 500;

    // chuyển string sang số
    page = Number(page);
    pageSize = Number(pageSize);

    // kiểm tra số âm
    if(page <= 0) {
        page = pageDefault;
    }
    if(pageSize <= 0) {
        pageSize = pageSizeDefault;
    }

    //  kiểm tra số nguyên hợp lệ
    if (!Number.isSafeInteger(page)) {
        page = pageDefault;
    }
    if (!Number.isSafeInteger(pageSize)) {
        pageSize = pageSizeDefault;
    }

    // giới hạn pageSize
    if (pageSize > maxPageSize) {
        pageSize = pageSizeDefault;
    }

    return { page, pageSize };
};
