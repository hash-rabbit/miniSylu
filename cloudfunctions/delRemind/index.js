// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'release-elve'
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection("remind").where({
    xuehao:event.xuehao
  }).update({
    data: {
      commentList: [],
      contentLikeList: [],
      commentLikeList: []
    },
  })
}