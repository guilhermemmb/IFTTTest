
var gaEvents = {
    analyticsId: 'UA-54345193-1',
    track: function(action) {
        var category = this.getAttribute("data-event-category") || 'page-element';
        var label = this.getAttribute("data-event-label") || undefined;
        action = action || 'unknown';

        ga('send', 'event', category, label, action);
    }
};

