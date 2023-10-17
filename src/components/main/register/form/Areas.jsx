export function Areas() {
  const areas = [
    {cityCode:'', area:'請選擇縣市'},
    {cityCode:'KLU', area:'基隆市'},
    {cityCode:'TPH', area:'新北市'},
    {cityCode:'TPE', area:'臺北市'},
    {cityCode:'TYC', area:'桃園市'},
    {cityCode:'HSH', area:'新竹縣'},
    {cityCode:'HSC', area:'新竹市'},
    {cityCode:'MAC', area:'苗栗市'},
    {cityCode:'MAL', area:'苗栗縣'},
    {cityCode:'TXG', area:'臺中市'},
    {cityCode:'CWH', area:'彰化縣'},
    {cityCode:'CWS', area:'彰化市'},
    {cityCode:'NTC', area:'南投市'},
    {cityCode:'NTO', area:'南投縣'},
    {cityCode:'YLH', area:'雲林縣'},
    {cityCode:'CHY', area:'嘉義縣'},
    {cityCode:'CYI', area:'嘉義市'},
    {cityCode:'TNN', area:'臺南市'},
    {cityCode:'KHH', area:'高雄市'},
    {cityCode:'IUH', area:'屏東縣'},
    {cityCode:'PTS', area:'屏東市'},
    {cityCode:'ILN', area:'宜蘭縣'},
    {cityCode:'ILC', area:'宜蘭市'},
    {cityCode:'HWA', area:'花蓮縣'},
    {cityCode:'HWC', area:'花蓮市'},
    {cityCode:'TTC', area:'臺東市'},
    {cityCode:'TTT', area:'臺東縣'},
    {cityCode:'PEH', area:'澎湖縣'},
    {cityCode:'KMN', area:'金門縣'},
    {cityCode:'LNN', area:'連江縣'}
  ]
  
  return(
    areas.map((area) => (
      <option key={area.cityCode} value={area.cityCode}>
        {area.area}
      </option>
    ))
  )
}