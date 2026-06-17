# Escanea esta carpeta por archivos CianoAlert_SRH_*.geojson y CianoAlert_ADA_*.geojson
# y regenera manifest.json con las fechas (YYYYMMDD) disponibles por capa, ordenadas.
#
# Correr de nuevo cada vez que se agreguen nuevos geojson semanales:
#   powershell -File generate_manifest.ps1

Set-Location -Path $PSScriptRoot

$srh = Get-ChildItem -Path "data" -Filter "CianoAlert_SRH_*.geojson" | ForEach-Object {
    if ($_.Name -match 'CianoAlert_SRH_(\d{8})\.geojson') { $matches[1] }
} | Sort-Object

$ada = Get-ChildItem -Path "data" -Filter "CianoAlert_ADA_*.geojson" | ForEach-Object {
    if ($_.Name -match 'CianoAlert_ADA_(\d{8})\.geojson') { $matches[1] }
} | Sort-Object

$manifest = [ordered]@{ srh = @($srh); ada = @($ada) }
$manifest | ConvertTo-Json -Depth 3 | Set-Content -Path "manifest.json" -Encoding utf8

Write-Output "manifest.json actualizado: SRH=$($srh.Count) fechas, ADA=$($ada.Count) fechas"
