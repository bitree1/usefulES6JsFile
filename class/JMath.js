/**
 * 参考：https://github.com/camsong/blog/issues/9
 */

export default class JMath {
    /**
     * 精确加法 避免出现
     * 0.1+0.2=0.30000000000000004,
     * 0.21-0.2=0.10000000000000009
     */
    static add(num1, num2) {
        const num1Digits = (num1.toString().split('.')[1] || '').length;
        const num2Digits = (num2.toString().split('.')[1] || '').length;
        const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
        return (num1 * baseNum + num2 * baseNum) / baseNum;
    }

    /**
     * 切割0.30000000000000004，0.10000000000000009为正常数字
     * @param num
     * @param precision
     * @returns {number}
     */
    static strip(num, precision = 12) {
        return +parseFloat(num.toPrecision(precision));
    }
}

