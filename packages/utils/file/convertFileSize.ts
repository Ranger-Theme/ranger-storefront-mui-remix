type FileSize = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'

/**
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 */
export const convertFileSize = (
  size: number,
  fromUnit: FileSize,
  toUnit: FileSize,
  decimalPoint: number = 2
) => {
  // 定义单位与字节之间的转换关系
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  // 获取初始单位和目标单位的索引
  const fromIndex = units.indexOf(fromUnit)
  const toIndex = units.indexOf(toUnit)

  // 如果单位不在列表中，抛出错误
  if (fromIndex === -1 || toIndex === -1) {
    throw new Error('Invalid units')
  }

  // 计算初始单位与目标单位之间的转换系数
  const exponent = toIndex - fromIndex
  // 计算结果大小
  const resultSize = size / Math.pow(1024, exponent)

  return parseFloat(resultSize.toFixed(decimalPoint)) + ' ' + toUnit
}
