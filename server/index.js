const express = require('express')
const axios = require('axios')
const _ = require('lodash')
var cors = require('cors')

const app = express()

app.use(cors())

const author = {
  name: 'Jacob',
  lastname: 'Gonzalez',
}

app.get('/api/items', async (req, res) => {
  try {
    const response = {
      author,
    }
    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}&limit=${req.query.limit || 4}`
    )
    // get categories found in filters
    const category = _.find(data.filters, (i) => i.id === 'category')

    let categoryPath = _.map(_.get(category, 'values'), (item) => {
      return _.get(item, 'path_from_root', []).length
        ? _.map(item.path_from_root, (path) => path.name)
        : [_.get(item, 'name')]
    })

    response.categories = _.flatMap(categoryPath)

    if (_.isEmpty(categoryPath)) {
      const category = _.find(data.available_filters, (i) => i.id === 'category')

      const tempMaximum = {
        results: 0,
      }

      _.get(category, 'values', []).forEach((i) => {
        if (i.results > tempMaximum.results) {
          Object.assign(tempMaximum, i)
        }
      })
      response.categories = [tempMaximum.name]
    }

    response.items = _.get(data, 'results', []).map((item) => ({
      id: item.id,
      title: item.title,
      price: { amount: item.price, currency: item.currency_id, decimals: item.decimals || 0 },
      picture: item.thumbnail,
      condition: item.condition,
      freeShiping: _.get(item, 'shipping.free_shipping', false),
      city: _.get(item, 'address.city_name'),
    }))

    res.json(response)
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
})

app.get('/api/items/:id', async (req, res) => {
  try {
    const response = {
      author,
    }
    const { data: itemData } = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    const { data: itemDescription } = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)

    response.item = {
      id: itemData.id,
      title: itemData.title,
      price: { amount: itemData.price, currency: itemData.currency_id, decimals: itemData.decimals || 0 },
      picture: itemData.pictures[0].secure_url,
      condition: itemData.condition,
      freeShiping: _.get(itemData, 'shipping.free_shipping', false),
      soldQuantity: itemData.sold_quantity,
      description: itemDescription.plain_text,
    }
    res.json(response)
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
