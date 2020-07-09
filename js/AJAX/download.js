const download = {
    ajax(url, callback, options) {
        window.URL = window.URL || window.webkitURL;
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        if (options.responseType) {
            xhr.responseType = options.responseType;
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr);
                console.log('end: ', new Date().getTime())
                return true
            }else{
                return false
            }
        };
        xhr.send();
    },
    async downloadAjax(url) {
        console.log('start: ',new Date().getTime())
        let innerurl = url;// 文件地址
        let name = url.replace(/(.*\/)*([^.]+).*/ig, '$2');
        this.ajax(innerurl, function (xhr) {
            let filename = name + '.' + innerurl.replace(/(.*\.)/, '');
            let content = xhr.response;
            let a = document.createElement('a');
            let blob = new Blob([xhr.response]);
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        }, {
            responseType: 'blob'
        });
    }
}

export default download