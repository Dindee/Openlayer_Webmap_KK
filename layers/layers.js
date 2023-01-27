var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__LDD_1 = new ol.format.GeoJSON();
var features__LDD_1 = format__LDD_1.readFeatures(json__LDD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__LDD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__LDD_1.addFeatures(features__LDD_1);
var lyr__LDD_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__LDD_1, 
                style: style__LDD_1,
                interactive: true,
    title: 'กลุ่มชุดดิน_LDD<br />\
    <img src="styles/legend/_LDD_1_0.png" /> 10/57<br />\
    <img src="styles/legend/_LDD_1_1.png" /> 14<br />\
    <img src="styles/legend/_LDD_1_2.png" /> 2<br />\
    <img src="styles/legend/_LDD_1_3.png" /> 42<br />\
    <img src="styles/legend/_LDD_1_4.png" /> 43<br />\
    <img src="styles/legend/_LDD_1_5.png" /> 50B<br />\
    <img src="styles/legend/_LDD_1_6.png" /> 50B/51B<br />\
    <img src="styles/legend/_LDD_1_7.png" /> 51C<br />\
    <img src="styles/legend/_LDD_1_8.png" /> 51D<br />\
    <img src="styles/legend/_LDD_1_9.png" /> 51E<br />\
    <img src="styles/legend/_LDD_1_10.png" /> 57<br />\
    <img src="styles/legend/_LDD_1_11.png" /> 57/58<br />\
    <img src="styles/legend/_LDD_1_12.png" /> 58<br />\
    <img src="styles/legend/_LDD_1_13.png" /> 62<br />\
    <img src="styles/legend/_LDD_1_14.png" /> Beach<br />\
    <img src="styles/legend/_LDD_1_15.png" /> P<br />\
    <img src="styles/legend/_LDD_1_16.png" /> U<br />\
    <img src="styles/legend/_LDD_1_17.png" /> W<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> แปลงปลูกยางพาราสมาชิก'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> คำอธิบายชุดดิน'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> เส้นทางน้ำ'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> แหล่งน้ำ'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> ขอบถนน'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__LDD_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__LDD_1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__LDD_1.set('fieldAliases', {'SOILGROUP': 'SOILGROUP', });
lyr__2.set('fieldAliases', {'FSC_ID': 'FSC_ID', 'X': 'X', 'Y': 'Y', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'เลขที่ดิน': 'เลขที่ดิน', 'ชื่อสมาชิก': 'ชื่อสมาชิก', 'ผลผลิต': 'ผลผลิต', 'เนื้อที่(ไร่)': 'เนื้อที่(ไร่)', 'พันธุ์ยาง': 'พันธุ์ยาง', 'ระยะปลูก': 'ระยะปลูก', 'ชื่อผู้กรีด': 'ชื่อผู้กรีด', 'รูปแบบการกรีด': 'รูปแบบการกรีด', 'ความลาดชัน': 'ความลาดชัน', });
lyr__3.set('fieldAliases', {'FID_prov_2': 'FID_prov_2', 'SOILGROUP': 'SOILGROUP', 'ชุดดิน': 'ชุดดิน', 'ชุดดินที่พบ': 'ชุดดินที่พบ', 'คุณสมบัติของดิน': 'คุณสมบัติของดิน', 'ความอุดมสมบูรณ์': 'ความอุดมสมบูรณ์', 'ปัญหาของดิน': 'ปัญหาของดิน', 'ความเหมาะสมในการถมดิน': 'ความเหมาะสมในการถมดิน', 'ความเหมาะสมในการขุดบ่อ': 'ความเหมาะสมในการขุดบ่อ', 'LDD_Soilgrop_URL': 'LDD_Soilgrop_URL', 'การปลูกไม้ผลไม้ยืนต้น': 'การปลูกไม้ผลไม้ยืนต้น', });
lyr__4.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_LNAME': 'HY_LNAME', });
lyr__5.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_PNAME': 'HY_PNAME', 'HY_PVOL': 'HY_PVOL', 'HY_PQUAL': 'HY_PQUAL', 'REMARK': 'REMARK', });
lyr__6.set('fieldAliases', {'id': 'id', });
lyr__LDD_1.set('fieldImages', {'SOILGROUP': 'TextEdit', });
lyr__2.set('fieldImages', {'FSC_ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'เลขที่ดิน': 'TextEdit', 'ชื่อสมาชิก': 'TextEdit', 'ผลผลิต': 'TextEdit', 'เนื้อที่(ไร่)': 'TextEdit', 'พันธุ์ยาง': 'TextEdit', 'ระยะปลูก': '', 'ชื่อผู้กรีด': 'TextEdit', 'รูปแบบการกรีด': 'TextEdit', 'ความลาดชัน': 'TextEdit', });
lyr__3.set('fieldImages', {'FID_prov_2': 'Range', 'SOILGROUP': 'TextEdit', 'ชุดดิน': 'TextEdit', 'ชุดดินที่พบ': 'TextEdit', 'คุณสมบัติของดิน': 'TextEdit', 'ความอุดมสมบูรณ์': 'TextEdit', 'ปัญหาของดิน': 'TextEdit', 'ความเหมาะสมในการถมดิน': 'TextEdit', 'ความเหมาะสมในการขุดบ่อ': 'TextEdit', 'LDD_Soilgrop_URL': 'TextEdit', 'การปลูกไม้ผลไม้ยืนต้น': 'TextEdit', });
lyr__4.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_LNAME': 'TextEdit', });
lyr__5.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_PNAME': 'TextEdit', 'HY_PVOL': 'Range', 'HY_PQUAL': 'TextEdit', 'REMARK': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'Range', });
lyr__LDD_1.set('fieldLabels', {'SOILGROUP': 'inline label', });
lyr__2.set('fieldLabels', {'FSC_ID': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'เลขที่ดิน': 'inline label', 'ชื่อสมาชิก': 'inline label', 'ผลผลิต': 'inline label', 'เนื้อที่(ไร่)': 'inline label', 'พันธุ์ยาง': 'inline label', 'ระยะปลูก': 'inline label', 'ชื่อผู้กรีด': 'inline label', 'รูปแบบการกรีด': 'inline label', 'ความลาดชัน': 'inline label', });
lyr__3.set('fieldLabels', {'FID_prov_2': 'no label', 'SOILGROUP': 'inline label', 'ชุดดิน': 'inline label', 'ชุดดินที่พบ': 'inline label', 'คุณสมบัติของดิน': 'inline label', 'ความอุดมสมบูรณ์': 'inline label', 'ปัญหาของดิน': 'inline label', 'ความเหมาะสมในการถมดิน': 'inline label', 'ความเหมาะสมในการขุดบ่อ': 'inline label', 'LDD_Soilgrop_URL': 'inline label', 'การปลูกไม้ผลไม้ยืนต้น': 'inline label', });
lyr__4.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_LNAME': 'no label', });
lyr__5.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_PNAME': 'no label', 'HY_PVOL': 'no label', 'HY_PQUAL': 'no label', 'REMARK': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});