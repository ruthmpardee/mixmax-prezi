// See full Prezi API here: http://prezi.github.io/prezi-player/

module.exports = function(options) {
    options.width = options.width || 640;
    options.height = options.height || 480;

    return '<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="' + options.width + '" height="' + options.height + '" src="https://prezi.com/embed/' + options.preziId + '/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp"></iframe>';
};