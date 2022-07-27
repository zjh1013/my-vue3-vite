import _ from 'lodash'
import Pinyin from 'js-pinyin'

Pinyin.setOptions({ charCase: 1 })
export const makePy = Pinyin
/**
 * 按照字母顺序排序
 */
export const sortList = (data, name = 'name') => {
  if (!_.isArray(data) || !data.length) return []
  return _.sortBy(data, c => {
    if (c.children && c.children.length > 0) {
      c.children = sortList(c.children, name)
    }
    return makePy.getFullChars(c[name])
  })
}