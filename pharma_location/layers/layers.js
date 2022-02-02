ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-5.536172, -9.224734, 120.642153, 65.611439]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IND_adm1_1 = new ol.format.GeoJSON();
var features_IND_adm1_1 = format_IND_adm1_1.readFeatures(json_IND_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IND_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_1.addFeatures(features_IND_adm1_1);
var lyr_IND_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm1_1, 
                style: style_IND_adm1_1,
                interactive: true,
                title: '<img src="styles/legend/IND_adm1_1.png" /> IND_adm1'
            });
var format_industries_2 = new ol.format.GeoJSON();
var features_industries_2 = format_industries_2.readFeatures(json_industries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_industries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industries_2.addFeatures(features_industries_2);
var lyr_industries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industries_2, 
                style: style_industries_2,
                interactive: true,
                title: '<img src="styles/legend/industries_2.png" /> industries'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IND_adm1_1.setVisible(true);lyr_industries_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IND_adm1_1,lyr_industries_2];
lyr_IND_adm1_1.set('fieldAliases', {'NAME_1': 'NAME_1', });
lyr_industries_2.set('fieldAliases', {'address': 'address', 'ID': 'ID', });
lyr_IND_adm1_1.set('fieldImages', {'NAME_1': 'TextEdit', });
lyr_industries_2.set('fieldImages', {'address': 'TextEdit', 'ID': 'TextEdit', });
lyr_IND_adm1_1.set('fieldLabels', {'NAME_1': 'no label', });
lyr_industries_2.set('fieldLabels', {'address': 'inline label', 'ID': 'no label', });
lyr_industries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});