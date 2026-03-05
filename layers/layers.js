var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AlertaCianobacterias20260304_1 = new ol.format.GeoJSON();
var features_AlertaCianobacterias20260304_1 = format_AlertaCianobacterias20260304_1.readFeatures(json_AlertaCianobacterias20260304_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlertaCianobacterias20260304_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlertaCianobacterias20260304_1.addFeatures(features_AlertaCianobacterias20260304_1);
var lyr_AlertaCianobacterias20260304_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlertaCianobacterias20260304_1, 
                style: style_AlertaCianobacterias20260304_1,
                popuplayertitle: 'Alerta Cianobacterias 2026-03-04',
                interactive: true,
    title: 'Alerta Cianobacterias 2026-03-04<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_0.png" /> Alerta verde estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_1.png" /> Alerta verde en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_2.png" /> Alerta amarilla estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_3.png" /> Alerta amarilla en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_4.png" /> Alerta amarilla en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_5.png" /> Alerta naranja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_6.png" /> Alerta naranja en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_7.png" /> Alerta naranja en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_8.png" /> Alerta roja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_9.png" /> Alerta roja en disminusión ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260304_1_10.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_AlertaCianobacterias20260304_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AlertaCianobacterias20260304_1];
lyr_AlertaCianobacterias20260304_1.set('fieldAliases', {'CodPto': 'CodPto', 'Nombre_pto': 'Nombre_pto', 'Muni': 'Muni', 'Tipo': 'Tipo', 'NombreAgua': 'NombreAgua', 'PtoGeo': 'PtoGeo', '_PtoGeo_la': '_PtoGeo_la', 'CodigoMuni': 'CodigoMuni', 'S2_SEM_fir': 'S2_SEM_fir', 'S2_DATE_fi': 'S2_DATE_fi', 'S3_SEM_fir': 'S3_SEM_fir', 'S3_DATE_fi': 'S3_DATE_fi', 'AS2': 'AS2', 'AS3': 'AS3', 'Alerta': 'Alerta', 'Dif': 'Dif', 'Fecha S2': 'Fecha S2', 'Fecha S3': 'Fecha S3', 'info': 'info', });
lyr_AlertaCianobacterias20260304_1.set('fieldImages', {'CodPto': 'TextEdit', 'Nombre_pto': 'TextEdit', 'Muni': 'TextEdit', 'Tipo': 'TextEdit', 'NombreAgua': 'TextEdit', 'PtoGeo': 'TextEdit', '_PtoGeo_la': 'TextEdit', 'CodigoMuni': 'TextEdit', 'S2_SEM_fir': 'TextEdit', 'S2_DATE_fi': 'TextEdit', 'S3_SEM_fir': 'TextEdit', 'S3_DATE_fi': 'TextEdit', 'AS2': 'Range', 'AS3': 'TextEdit', 'Alerta': 'TextEdit', 'Dif': 'Range', 'Fecha S2': 'DateTime', 'Fecha S3': 'DateTime', 'info': 'TextEdit', });
lyr_AlertaCianobacterias20260304_1.set('fieldLabels', {'CodPto': 'inline label - visible with data', 'Nombre_pto': 'inline label - visible with data', 'Muni': 'inline label - visible with data', 'Tipo': 'hidden field', 'NombreAgua': 'inline label - visible with data', 'PtoGeo': 'hidden field', '_PtoGeo_la': 'hidden field', 'CodigoMuni': 'hidden field', 'S2_SEM_fir': 'hidden field', 'S2_DATE_fi': 'hidden field', 'S3_SEM_fir': 'hidden field', 'S3_DATE_fi': 'hidden field', 'AS2': 'hidden field', 'AS3': 'hidden field', 'Alerta': 'hidden field', 'Dif': 'hidden field', 'Fecha S2': 'inline label - visible with data', 'Fecha S3': 'inline label - visible with data', 'info': 'inline label - visible with data', });
lyr_AlertaCianobacterias20260304_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});