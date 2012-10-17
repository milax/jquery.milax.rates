/*

jQuery Milax Rates v1.0.0
jQuery Plugin
Latest Update: 16.10.2012

Author: Eugene Kuzmin
Copyright: 2012, Eugene Kuzmin

-----------------------------------------------------------------------*/
;(function($) {

    $.fn.mxRates = function(options) {

        var opts = { },
            html = '<ul> \
                        <li><a href="#" class="ir" data-index="0">1</a></li> \
                        <li><a href="#" class="ir" data-index="1">2</a></li> \
                        <li><a href="#" class="ir" data-index="2">3</a></li> \
                        <li><a href="#" class="ir" data-index="3">4</a></li> \
                        <li><a href="#" class="ir" data-index="4">5</a></li> \
                    </ul> \
                    <input type="radio" name="{name}" value="1"> \
                    <input type="radio" name="{name}" value="2"> \
                    <input type="radio" name="{name}" value="3"> \
                    <input type="radio" name="{name}" value="4"> \
                    <input type="radio" name="{name}" value="5">',
            $rates = this;

        // ==========================================================================
        // Entry point
        // ==========================================================================
        this.init = function() {

            // merge options
            opts = jQuery.extend(
                {
                    ratesClassname: '.mxRate'
                },
                options
            );

            buildRatesHtml();
            bindings();

        };

        var bindings = function() {

            $rates.on('mouseover', 'a', starMouseOverHandler);
            $rates.on('mouseleave', 'a', starMouseLeaveHandler);
            $rates.on('click', 'a', starClickHandler);

            function starClickHandler(e) {
                var $self = $(e.currentTarget),
                    ind = $self.data('index'),
                    $parent = $self.closest(opts.ratesClassname);

                console.log($parent);

                $parent.find('a.rated').removeClass('rated');
                $parent.find('a:lt(' + ind + ')').addClass('rated');
                $parent.find('a.active').removeClass('active');
                $self.addClass('active');
                $parent.find('input[type="radio"]').removeAttr('checked');
                $parent.find('input[type="radio"]').eq(ind).attr('checked', 'checked');

                return false;
            }

            function starMouseLeaveHandler(e) {
                var $self = $(e.currentTarget),
                    $parent = $self.closest(opts.ratesClassname);
                    
                $parent.find('a.highlighted').removeClass('highlighted');
            }
            
            function starMouseOverHandler(e) {
                var $self = $(e.currentTarget),
                    ind = $self.data('index'),
                    $parent = $self.closest(opts.ratesClassname);

                $parent.find('a:lt(' + ind + ')').addClass('highlighted');
            }
        }

        var buildRatesHtml = function() {
            $rates.each(addHtml);
            
            function addHtml() {
                var $self = $(this),
                    id = $self.attr('id'),
                    html2Add = html.replace(/{name}/g, id);

                $self.append(html2Add);
            }
        }

        this.init();
    };
    
})(jQuery);