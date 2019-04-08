$.initMap = function() {

    let r = Raphael('mapa', 777, 413);
    r.setSize('100%', '100%');
	r.safari();
	let _label = r.popup(10, 10, "").hide();
    const attributes = {
            fill: '#eeeeee',
            stroke: '#cccccc',
            'stroke-width': 0.4
        };
    let arr = new Array();
    // Dibujamos los paths de la fuente SVG
    for (let currentPath in paths) {
        let obj = r.path(paths[currentPath].path);
        arr[obj.id] = currentPath;
		obj.attr(attributes);
		// Al pasar el ratón por encima del path le cambiamos el color
        obj.hover(function(){
            this.animate({
                fill: '#aaaaaa'
            }, 200);
			bbox = this.getBBox();
			// Mostramos el tooltip
			_label.attr({text: paths[arr[this.id]].name}).update(bbox.x, bbox.y + bbox.height/2, bbox.width).toFront().show();
        },
        // Restablecemos su color
        function(){
            this.animate({
                fill: attributes.fill,
                stroke: attributes.stroke
            }, 200);
            // Ocultamos el tooltip
			_label.hide();
        });
        // Al hacer click en alguna comunidad, hacemos zoom sobre la comunidad seleccionada
        obj.click(function(){
            obj.hover(function(){
                    this.animate({
                        fill: '#aaaaaa'
                    }, 200);
                    // Ocultamos el tooltip
                    _label.hide();
                },
                // Restablecemos su color
                function(){
                    this.animate({
                        fill: '#aaaaaa'
                    }, 200);
                });
            bbox = this.getBBox();
            let margin = Math.max(bbox.width, bbox.height) * 0.025;
            r.canvas.setAttribute('viewBox', (bbox.x - margin) + " " + (bbox.y - margin) + " " + (bbox.width + (margin * 2)) + " " + (bbox.height + (margin *2)));
            $("#capa-boton").css("display", "block");
            $("svg").css("overflow", "hidden");
        });
    }

    if (Raphael.type == "SVG"){
        r.canvas.setAttribute('viewBox', "0 0 777.74173 413.26299");
    }

};
