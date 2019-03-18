import { MDCChipSet } from '@material/chips';
import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';
import { MDCList } from '@material/list';
import data from './data'

import { MDCTextField } from '@material/textfield';

var globChipId = null

const closeFilter = () => {
  document.querySelector('#fab-search').style.display = 'block'
  document.querySelector('#search-box').style.display = 'none'
  document.querySelector('#box-black').style.display = 'none'
}

const showMap = (url) => {
  document.getElementById('map').setAttribute('src', url)
  closeFilter()
}

const updateList = (listAlamat = [], listUrl = [], category = 'sekolah') => {
  const createItem = (text, url) => {
    if(!url) {
      return `<li class="mdc-list-item"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">close</span>${ text }</li>`
    }
    return `<li class="mdc-list-item" onclick="document.querySelector('#fab-search').style.display = 'block';document.querySelector('#search-box').style.display = 'none';document.querySelector('#box-black').style.display = 'none';document.getElementById('map').setAttribute('src', '${ url }')"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">place</span>${ text }</li>`
  }
  const seluruhPbg = createItem('Seluruh Purbalingga', data.seluruhPurbalingga[category])
  var maps = []
  if(category != 'kecamatan') {
    maps.push(seluruhPbg)
  }

  var counter = 0
  for(let alamat of listAlamat) {
    maps.push(createItem(alamat, listUrl[counter]))
    counter++
  }

  const listDesa = new MDCList(document.querySelector('#search-result'));
  const listItemRipples = listDesa.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  listItemRipples.listElements = []

  document.querySelector('#search-result').innerHTML = maps.join('')
}

const searchDesa = (e) => {
  if(e.target.value.length < 3) return updateList([])

  const category = data.getCategory[globChipId]
  const valLower = e.target.value.toLowerCase()

  const getKeysContain = () => {
    var keysContain = []
    for(let alamat of data.alamatKeys) {
      const alamatLower = alamat.toLowerCase()
      if(alamatLower.includes(valLower)) {
        keysContain.push(alamat)
      }
    }
    return keysContain
  }

  const keysContain = getKeysContain()
  if(!keysContain.length) return updateList([])

  const getMapsByAlamat = (keysContain) => {
    return data.maps.filter((map) => keysContain.includes(map.alamat))
  }

  const mapsByAlamat = getMapsByAlamat(keysContain).map(map => map.mapByCategories)
  const mapsByAlamatAndCategory = mapsByAlamat.map(map => map[category])
  updateList(keysContain, mapsByAlamatAndCategory, category)
}

const goToStep1 = () => {
  globChipId = null
  document.querySelector('#desa-input-text').value = ''
  updateList([])

  document.querySelector('#fab-search').style.display = 'none'
  document.querySelector('#search-box').style.display = 'block'
  document.querySelector('#box-black').style.display = 'block'
  document.querySelector('#step-1').style.display = 'block'
  document.querySelector('#step-2').style.display = 'none'
  document.querySelector('#search-box').classList.remove('tall')

  document.querySelector('#search-context').innerHTML = ''
}

const startApp = () => {
  const setupListener = () => {
    document.querySelector('#desa-input-text').addEventListener('focus', searchDesa)
    document.querySelector('#desa-input-text').addEventListener('input', searchDesa)
    document.querySelector('#show-more-box').addEventListener('click', goToStep1)
    document.querySelector('#fab-search').addEventListener('click', goToStep1)
    document.querySelector('#close').addEventListener('click', closeFilter)
  }

  const listDesa = new MDCList(document.querySelector('#search-result'));
  const listItemRipples = listDesa.listElements.map((listItemEl) => new MDCRipple(listItemEl));

  setupListener()
}

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

const writeSearchContext = (currChipId) => {
  document.getElementById('search-context').innerHTML = data.chipIds[currChipId]
}

const gotToStep2Building = () => {
  const hideChipSet = () => {
    document.querySelector('#step-1').style.display = 'none'
    document.querySelector('#step-2').style.display = 'block'
    document.querySelector('#desa-input-text').focus()
  }

  const setHeight = () => {
    document.querySelector('#search-box').classList.add('tall')
  }

  hideChipSet()
  setHeight()
  document.querySelector('#search-text').style.display = 'inline-flex'
}

const gotToStep2Kecamatan = () => {
  const hideChipSet = () => {
    document.querySelector('#step-1').style.display = 'none'
    document.querySelector('#step-2').style.display = 'block'
  }

  const setHeight = () => {
    document.querySelector('#search-box').classList.add('tall')
  }

  hideChipSet()
  setHeight()
  document.querySelector('#search-text').style.display = 'none'

  const kecamatansName = data.mapsByKecamatans.map(doc => 'Kecamatan ' + doc.name)
  const kecamatansUrl  = data.mapsByKecamatans.map(doc => doc.url)
  updateList(kecamatansName, kecamatansUrl, 'kecamatan')
}

const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);
chipSet.listen('MDCChip:interaction', function(event) {
  const currChipId = event.detail.chipId
  globChipId = currChipId
  writeSearchContext(currChipId)

  const currChipIdInt = parseInt(currChipId.replace('mdc-chip-', ''))
  const isChipBuilding = (currChipIdInt > 1)
  const isChipKecamatan = (currChipIdInt == 1)

  if(isChipBuilding) {
    setTimeout(gotToStep2Building, 400)
  }
  if(isChipKecamatan) {
    setTimeout(gotToStep2Kecamatan, 400)
  }
});

startApp()
