import _ from 'lodash'

export const sortProduct =  [
    {path: 'name', label: 'Name'},
    {path: 'price', label: 'Price'},
  
]

export const category = [
    {label: "Casual",value: 'CASUAL', name: 'Category', },
    {label: "Formal",value: 'FORMAL', name: 'Category'},
    {label: "Running",value: 'RUNNING', name: 'Category'},
    {label: "Football",value: 'FOOTBALL', name: 'Category'},
]


export const tags = [
    { value: 'Shopping' },
    { value: 'New Products' },
    { value: 'Accessories' },
    { value: 'Sale' },
]

export const star = _.range(5);


export const des = [ 'Description', 'Product Details', 'Reviews']
