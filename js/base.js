/*

    Project name
    JavaScript functions

    Author: Author / www.site.com
    Copyright: 2012, Author. All rights resevered

-----------------------------------------------------------------------*/

var ProjectName = ProjectName || {};

(function ($) {

    // ==========================================================================
    // Utils used on the sites
    // ==========================================================================
    ProjectName.Utils = function() {
        
        /* Ajax wrapper
           @options - custom options
           ========================================================================== */
        this.ajax = function(options) {
            var ajaxPostType = 'post',
                ajaxContentType = 'application/json; charset=utf-8',
                ajaxDataType = 'json',
                defaults = {
                    data: { },
                    type: ajaxPostType,
                    contentType: ajaxContentType,
                    dataType: ajaxDataType,
                    url: '',
                    success: function(result) {
                        var res = eval(result); res = eval('(' + res.d + ')');
                        if ($.isFunction(options.callBack)) options.callBack(res);
                    },
                    error: function(xmlHttpRequest) {
                        if ($.isFunction(options.serverError)) {
                            options.serverError(xmlHttpRequest);
                        }
                    }
                };
            var opts = $.extend({ }, defaults, options);
            opts.data = $.toJSON(opts.data);
            $.ajax(opts);
        };
    };

    // =================================================
    // Document ready function
    // =================================================
    $(function() {
    });

})(jQuery);
