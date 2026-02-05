var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AlertaCiano_1 = new ol.format.GeoJSON();
var features_AlertaCiano_1 = format_AlertaCiano_1.readFeatures(json_AlertaCiano_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlertaCiano_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlertaCiano_1.addFeatures(features_AlertaCiano_1);
var lyr_AlertaCiano_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlertaCiano_1, 
                style: style_AlertaCiano_1,
                popuplayertitle: 'Alerta Ciano',
                interactive: true,
    title: 'Alerta Ciano<br />\
    <img src="styles/legend/AlertaCiano_1_0.png" /> Alerta verde estable<br />\
    <img src="styles/legend/AlertaCiano_1_1.png" /> Alerta verde en aumento<br />\
    <img src="styles/legend/AlertaCiano_1_2.png" /> Alerta amarillo estable<br />\
    <img src="styles/legend/AlertaCiano_1_3.png" /> Alerta amarillo disminuyendo<br />\
    <img src="styles/legend/AlertaCiano_1_4.png" /> Alerta amarillo en aumento<br />\
    <img src="styles/legend/AlertaCiano_1_5.png" /> Alerta naranja estable<br />\
    <img src="styles/legend/AlertaCiano_1_6.png" /> Alerta naranja disminuyendo<br />\
    <img src="styles/legend/AlertaCiano_1_7.png" /> Alerta naranja en aumento<br />\
    <img src="styles/legend/AlertaCiano_1_8.png" /> Alerta roja estable<br />\
    <img src="styles/legend/AlertaCiano_1_9.png" /> Alerta roja en disminusión<br />\
    <img src="styles/legend/AlertaCiano_1_10.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_AlertaCiano_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AlertaCiano_1];
lyr_AlertaCiano_1.set('fieldAliases', {'CodPto': 'CodPto', 'Nombre_pto': 'Nombre_pto', 'Muni': 'Muni', 'Tipo': 'Tipo', 'NombreAgua': 'NombreAgua', 'PtoGeo': 'PtoGeo', '_PtoGeo_la': '_PtoGeo_la', 'CodigoMuni': 'CodigoMuni', 'S2_SEMfirs': 'S2_SEMfirs', 'Fecha S2': 'Fecha S2', 'S3_SEMfirs': 'S3_SEMfirs', 'Fecha S3': 'Fecha S3', 'Alerta': 'Alerta', 'AS2': 'AS2', 'AS3': 'AS3', 'Dif': 'Dif', 'Info': 'Info', });
lyr_AlertaCiano_1.set('fieldImages', {'CodPto': 'TextEdit', 'Nombre_pto': 'TextEdit', 'Muni': 'TextEdit', 'Tipo': 'TextEdit', 'NombreAgua': 'TextEdit', 'PtoGeo': 'TextEdit', '_PtoGeo_la': 'TextEdit', 'CodigoMuni': 'TextEdit', 'S2_SEMfirs': 'TextEdit', 'Fecha S2': 'TextEdit', 'S3_SEMfirs': 'TextEdit', 'Fecha S3': 'TextEdit', 'Alerta': 'TextEdit', 'AS2': 'Range', 'AS3': 'TextEdit', 'Dif': 'Range', 'Info': 'TextEdit', });
lyr_AlertaCiano_1.set('fieldLabels', {'CodPto': 'inline label - visible with data', 'Nombre_pto': 'inline label - visible with data', 'Muni': 'inline label - visible with data', 'Tipo': 'hidden field', 'NombreAgua': 'inline label - visible with data', 'PtoGeo': 'hidden field', '_PtoGeo_la': 'hidden field', 'CodigoMuni': 'hidden field', 'S2_SEMfirs': 'hidden field', 'Fecha S2': 'inline label - visible with data', 'S3_SEMfirs': 'hidden field', 'Fecha S3': 'inline label - visible with data', 'Alerta': 'hidden field', 'AS2': 'hidden field', 'AS3': 'hidden field', 'Dif': 'hidden field', 'Info': 'header label - always visible', });
lyr_AlertaCiano_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});