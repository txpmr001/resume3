// main javascript file

var resumeProject = {};

// Document ready function.
$(function(){
  // Fix jqm issue: open panel causes scroll to top in main.
  // https://stackoverflow.com/questions/21264509/jquery-mobile-page-jumping-to-top-when-a-collapsible-is-clicked
  $.mobile.panel.prototype._positionPanel = function() {
    var self = this,
      panelInnerHeight = self._panelInner.outerHeight(),
      expand = panelInnerHeight > $.mobile.getScreenHeight();

    if ( expand || !self.options.positionFixed ) {
      if ( expand ) {
        self._unfixPanel();
        $.mobile.resetActivePageHeight( panelInnerHeight );
      }
      //window.scrollTo( 0, $.mobile.defaultHomeScroll );
    } else {
      self._fixPanel();
    }
  };
});
