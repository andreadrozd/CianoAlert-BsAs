var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Datos_Lugar_250306_copia_1 = new ol.format.GeoJSON();
var features_Datos_Lugar_250306_copia_1 = format_Datos_Lugar_250306_copia_1.readFeatures(json_Datos_Lugar_250306_copia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datos_Lugar_250306_copia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datos_Lugar_250306_copia_1.addFeatures(features_Datos_Lugar_250306_copia_1);
var lyr_Datos_Lugar_250306_copia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datos_Lugar_250306_copia_1, 
                style: style_Datos_Lugar_250306_copia_1,
                popuplayertitle: 'Datos_Lugar_250306_copia',
                interactive: false,
                title: '<img src="styles/legend/Datos_Lugar_250306_copia_1.png" /> Datos_Lugar_250306_copia'
            });
var format_CianoSemSat_20260205_2 = new ol.format.GeoJSON();
var features_CianoSemSat_20260205_2 = format_CianoSemSat_20260205_2.readFeatures(json_CianoSemSat_20260205_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CianoSemSat_20260205_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CianoSemSat_20260205_2.addFeatures(features_CianoSemSat_20260205_2);
var lyr_CianoSemSat_20260205_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CianoSemSat_20260205_2, 
                style: style_CianoSemSat_20260205_2,
                popuplayertitle: 'CianoSemSat_20260205',
                interactive: true,
    title: 'CianoSemSat_20260205<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_0.png" /> Alerta verde estable<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_1.png" /> Alerta verde en aumento<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_2.png" /> Alerta amarillo estable<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_3.png" /> Alerta amarillo disminuyendo<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_4.png" /> alerta amarillo en aumento<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_5.png" /> Alerta naranja estable<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_6.png" /> Alerta naranja disminuyendo<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_7.png" /> Alerta naranja en aumento<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_8.png" /> Alerta roja estable<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_9.png" /> Alerta roja en disminusión<br />\
    <img src="styles/legend/CianoSemSat_20260205_2_10.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_Datos_Lugar_250306_copia_1.setVisible(true);lyr_CianoSemSat_20260205_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Datos_Lugar_250306_copia_1,lyr_CianoSemSat_20260205_2];
lyr_Datos_Lugar_250306_copia_1.set('fieldAliases', {'CodPto': 'CodPto', 'Nombre_pto': 'Nombre_pto', 'Muni': 'Muni', 'Tipo': 'Tipo', 'NombreAgua': 'NombreAgua', 'PtoGeo': 'PtoGeo', '_PtoGeo_la': '_PtoGeo_la', 'CodigoMuni': 'CodigoMuni', });
lyr_CianoSemSat_20260205_2.set('fieldAliases', {'CodPto': 'CodPto', 'Nombre_pto': 'Nombre_pto', 'Muni': 'Muni', 'Tipo': 'Tipo', 'NombreAgua': 'NombreAgua', 'PtoGeo': 'PtoGeo', '_PtoGeo_la': '_PtoGeo_la', 'CodigoMuni': 'CodigoMuni', 'S2_SEMfirs': 'S2_SEMfirs', 'S2_DATEfir': 'S2_DATEfir', 'S3_SEMfirs': 'S3_SEMfirs', 'S3_DATEfir': 'S3_DATEfir', 'Alerta': 'Alerta', 'AS2': 'AS2', 'AS3': 'AS3', 'Dif': 'Dif', 'Info': 'Info', });
lyr_Datos_Lugar_250306_copia_1.set('fieldImages', {'CodPto': 'TextEdit', 'Nombre_pto': 'TextEdit', 'Muni': 'TextEdit', 'Tipo': 'TextEdit', 'NombreAgua': 'TextEdit', 'PtoGeo': 'TextEdit', '_PtoGeo_la': 'TextEdit', 'CodigoMuni': 'TextEdit', });
lyr_CianoSemSat_20260205_2.set('fieldImages', {'CodPto': 'TextEdit', 'Nombre_pto': 'TextEdit', 'Muni': 'TextEdit', 'Tipo': 'TextEdit', 'NombreAgua': 'TextEdit', 'PtoGeo': 'TextEdit', '_PtoGeo_la': 'TextEdit', 'CodigoMuni': 'TextEdit', 'S2_SEMfirs': 'TextEdit', 'S2_DATEfir': 'TextEdit', 'S3_SEMfirs': 'TextEdit', 'S3_DATEfir': 'TextEdit', 'Alerta': 'TextEdit', 'AS2': 'Range', 'AS3': 'TextEdit', 'Dif': 'Range', 'Info': 'TextEdit', });
lyr_Datos_Lugar_250306_copia_1.set('fieldLabels', {'CodPto': 'inline label - visible with data', 'Nombre_pto': 'header label - visible with data', 'Muni': 'inline label - visible with data', 'Tipo': 'no label', 'NombreAgua': 'inline label - visible with data', 'PtoGeo': 'no label', '_PtoGeo_la': 'no label', 'CodigoMuni': 'no label', });
lyr_CianoSemSat_20260205_2.set('fieldLabels', {'CodPto': 'inline label - visible with data', 'Nombre_pto': 'inline label - visible with data', 'Muni': 'inline label - visible with data', 'Tipo': 'hidden field', 'NombreAgua': 'inline label - visible with data', 'PtoGeo': 'hidden field', '_PtoGeo_la': 'hidden field', 'CodigoMuni': 'hidden field', 'S2_SEMfirs': 'hidden field', 'S2_DATEfir': 'hidden field', 'S3_SEMfirs': 'hidden field', 'S3_DATEfir': 'hidden field', 'Alerta': 'hidden field', 'AS2': 'hidden field', 'AS3': 'hidden field', 'Dif': 'hidden field', 'Info': 'header label - always visible', });
lyr_CianoSemSat_20260205_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});