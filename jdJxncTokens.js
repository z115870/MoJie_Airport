/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '{"farm_jstoken":"7ba516c0f4d0b20886b03480b06e37e1","phoneid":"90b10f2779000809a249de4ac5dfcb0f5ae4caa8","timestamp":"1610958977369","pin":"fangyadi2015"}',//账号一的京喜农场token
  '{"farm_jstoken":"9f96646326355817da5924ed0a7da9c9","phoneid":"90b10f2779000809a249de4ac5dfcb0f5ae4caa8","timestamp":"1610959088377","pin":"%E6%98%9F%E6%A2%A6706"}',//账号二的京喜农场token
  '{"farm_jstoken":"03dd51acff022364717c3a6835e91945","phoneid":"90b10f2779000809a249de4ac5dfcb0f5ae4caa8","timestamp":"1610959175209","pin":"YQin18111"}',//账号三的京喜农场token
  '',//账号四的京喜农场token
  '',//账号五的京喜农场token

]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
