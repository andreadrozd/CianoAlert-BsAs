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
var format_BsAs_Deptos_IDERA_wgs84_1 = new ol.format.GeoJSON();
var features_BsAs_Deptos_IDERA_wgs84_1 = format_BsAs_Deptos_IDERA_wgs84_1.readFeatures(json_BsAs_Deptos_IDERA_wgs84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BsAs_Deptos_IDERA_wgs84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BsAs_Deptos_IDERA_wgs84_1.addFeatures(features_BsAs_Deptos_IDERA_wgs84_1);
var lyr_BsAs_Deptos_IDERA_wgs84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BsAs_Deptos_IDERA_wgs84_1, 
                style: style_BsAs_Deptos_IDERA_wgs84_1,
                popuplayertitle: 'BsAs_Deptos_IDERA_wgs84',
                interactive: true,
                title: '<img src="styles/legend/BsAs_Deptos_IDERA_wgs84_1.png" /> BsAs_Deptos_IDERA_wgs84'
            });
var format_AlertaCianobacterias20260318ADA_2 = new ol.format.GeoJSON();
var features_AlertaCianobacterias20260318ADA_2 = format_AlertaCianobacterias20260318ADA_2.readFeatures(json_AlertaCianobacterias20260318ADA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlertaCianobacterias20260318ADA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlertaCianobacterias20260318ADA_2.addFeatures(features_AlertaCianobacterias20260318ADA_2);
var lyr_AlertaCianobacterias20260318ADA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlertaCianobacterias20260318ADA_2, 
                style: style_AlertaCianobacterias20260318ADA_2,
                popuplayertitle: 'Alerta Cianobacterias 2026-03-18 - ADA',
                interactive: true,
    title: 'Alerta Cianobacterias 2026-03-18 - ADA<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_0.png" /> Alerta verde estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_1.png" /> Alerta verde en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_2.png" /> Alerta amarilla estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_3.png" /> Alerta amarilla en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_4.png" /> Alerta amarilla en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_5.png" /> Alerta naranja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_6.png" /> Alerta naranja en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_7.png" /> Alerta naranja en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_8.png" /> Alerta roja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_9.png" /> Alerta roja en disminusión ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318ADA_2_10.png" /> <br />' });
var format_AlertaCianobacterias20260318SRH_3 = new ol.format.GeoJSON();
var features_AlertaCianobacterias20260318SRH_3 = format_AlertaCianobacterias20260318SRH_3.readFeatures(json_AlertaCianobacterias20260318SRH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlertaCianobacterias20260318SRH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlertaCianobacterias20260318SRH_3.addFeatures(features_AlertaCianobacterias20260318SRH_3);
var lyr_AlertaCianobacterias20260318SRH_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlertaCianobacterias20260318SRH_3, 
                style: style_AlertaCianobacterias20260318SRH_3,
                popuplayertitle: 'Alerta Cianobacterias 2026-03-18 -SRH',
                interactive: true,
    title: 'Alerta Cianobacterias 2026-03-18 -SRH<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_0.png" /> Alerta verde estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_1.png" /> Alerta verde en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_2.png" /> Alerta amarilla estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_3.png" /> Alerta amarilla en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_4.png" /> Alerta amarilla en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_5.png" /> Alerta naranja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_6.png" /> Alerta naranja en disminución ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_7.png" /> Alerta naranja en aumento ⬆️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_8.png" /> Alerta roja estable 🟰<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_9.png" /> Alerta roja en disminusión ⬇️<br />\
    <img src="styles/legend/AlertaCianobacterias20260318SRH_3_10.png" /> <br />' });
var group_SRH = new ol.layer.Group({
                                layers: [lyr_AlertaCianobacterias20260318SRH_3,],
                                fold: 'open',
                                title: 'SRH'});
var group_ADA = new ol.layer.Group({
                                layers: [lyr_AlertaCianobacterias20260318ADA_2,],
                                fold: 'open',
                                title: 'ADA'});

lyr_GoogleHybrid_0.setVisible(true);lyr_BsAs_Deptos_IDERA_wgs84_1.setVisible(true);lyr_AlertaCianobacterias20260318ADA_2.setVisible(true);lyr_AlertaCianobacterias20260318SRH_3.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_BsAs_Deptos_IDERA_wgs84_1,group_ADA,group_SRH];
lyr_BsAs_Deptos_IDERA_wgs84_1.set('fieldAliases', {'cca': 'cca', 'cde': 'cde', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'sag': 'sag', 'ara3': 'ara3', 'arl': 'arl', 'peligro': 'peligro', });
lyr_AlertaCianobacterias20260318ADA_2.set('fieldAliases', {'CodPto': 'CodPto', 'Nombre_pto': 'Nombre_pto', 'Muni': 'Muni', 'Tipo': 'Tipo', 'NombreAgua': 'NombreAgua', 'PtoGeo': 'PtoGeo', '_PtoGeo_la': '_PtoGeo_la', 'CodigoMuni': 'CodigoMuni', 'S2_SEM_mod': 'S2_SEM_mod', 'S2_DATE_fi': 'S2_DATE_fi', 'S3_SEM_mod': 'S3_SEM_mod', 'S3_DATE_fi': 'S3_DATE_fi', 'Alerta': 'Alerta', 'AS2': 'AS2', 'AS3': 'AS3', 'Dif': 'Dif', 'S2 Fecha': 'S2 Fecha', 'S3 Fecha': 'S3 Fecha', 'info': 'info', });
lyr_AlertaCianobacterias20260318SRH_3.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'PUNTO': 'PUNTO', 'NOMBRE CON': 'NOMBRE CON', 'COORDENADA': 'COORDENADA', 'Lat': 'Lat', 'Long': 'Long', 'S2_SEM_mod': 'S2_SEM_mod', 'S2_DATE_mo': 'S2_DATE_mo', 'S3_SEM_mod': 'S3_SEM_mod', 'S3_DATE_fi': 'S3_DATE_fi', 'Alerta': 'Alerta', 'AS2': 'AS2', 'AS3': 'AS3', 'Dif': 'Dif', 'S2 Fecha': 'S2 Fecha', 'S3 Fecha': 'S3 Fecha', 'info': 'info', });
lyr_BsAs_Deptos_IDERA_wgs84_1.set('fieldImages', {'cca': 'TextEdit', 'cde': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'sag': 'TextEdit', 'ara3': 'TextEdit', 'arl': 'TextEdit', 'peligro': 'TextEdit', });
lyr_AlertaCianobacterias20260318ADA_2.set('fieldImages', {'CodPto': 'TextEdit', 'Nombre_pto': 'TextEdit', 'Muni': 'TextEdit', 'Tipo': 'TextEdit', 'NombreAgua': 'TextEdit', 'PtoGeo': 'TextEdit', '_PtoGeo_la': 'TextEdit', 'CodigoMuni': 'TextEdit', 'S2_SEM_mod': 'TextEdit', 'S2_DATE_fi': 'TextEdit', 'S3_SEM_mod': 'TextEdit', 'S3_DATE_fi': 'TextEdit', 'Alerta': 'TextEdit', 'AS2': 'Range', 'AS3': 'TextEdit', 'Dif': 'Range', 'S2 Fecha': 'DateTime', 'S3 Fecha': 'DateTime', 'info': 'TextEdit', });
lyr_AlertaCianobacterias20260318SRH_3.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'PUNTO': 'TextEdit', 'NOMBRE CON': 'TextEdit', 'COORDENADA': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'S2_SEM_mod': 'TextEdit', 'S2_DATE_mo': 'TextEdit', 'S3_SEM_mod': 'TextEdit', 'S3_DATE_fi': 'TextEdit', 'Alerta': 'TextEdit', 'AS2': 'Range', 'AS3': 'TextEdit', 'Dif': 'Range', 'S2 Fecha': 'DateTime', 'S3 Fecha': 'DateTime', 'info': 'TextEdit', });
lyr_BsAs_Deptos_IDERA_wgs84_1.set('fieldLabels', {'cca': 'hidden field', 'cde': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'header label - always visible', 'sag': 'hidden field', 'ara3': 'hidden field', 'arl': 'hidden field', 'peligro': 'hidden field', });
lyr_AlertaCianobacterias20260318ADA_2.set('fieldLabels', {'CodPto': 'inline label - visible with data', 'Nombre_pto': 'header label - visible with data', 'Muni': 'hidden field', 'Tipo': 'hidden field', 'NombreAgua': 'header label - always visible', 'PtoGeo': 'hidden field', '_PtoGeo_la': 'hidden field', 'CodigoMuni': 'hidden field', 'S2_SEM_mod': 'hidden field', 'S2_DATE_fi': 'hidden field', 'S3_SEM_mod': 'hidden field', 'S3_DATE_fi': 'hidden field', 'Alerta': 'hidden field', 'AS2': 'hidden field', 'AS3': 'hidden field', 'Dif': 'hidden field', 'S2 Fecha': 'inline label - visible with data', 'S3 Fecha': 'inline label - visible with data', 'info': 'header label - visible with data', });
lyr_AlertaCianobacterias20260318SRH_3.set('fieldLabels', {'MUNICIPIO': 'hidden field', 'PUNTO': 'header label - visible with data', 'NOMBRE CON': 'hidden field', 'COORDENADA': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'S2_SEM_mod': 'hidden field', 'S2_DATE_mo': 'hidden field', 'S3_SEM_mod': 'hidden field', 'S3_DATE_fi': 'hidden field', 'Alerta': 'hidden field', 'AS2': 'hidden field', 'AS3': 'hidden field', 'Dif': 'hidden field', 'S2 Fecha': 'inline label - visible with data', 'S3 Fecha': 'inline label - visible with data', 'info': 'header label - visible with data', });
lyr_AlertaCianobacterias20260318SRH_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});