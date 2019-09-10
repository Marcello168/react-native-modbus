
import { NativeModules } from 'react-native';

const { RNModbus } = NativeModules;

/**
 * 打开串口
 * @param {*串口路径} path 
 * @param {*波特率} baudrate 
 * @param {* 成功或者失败回调} Callback 
 */
function openDevice(path, baudrate, Callback) {
    RNModbus.openDevice(path, baudrate, Callback)
}

/**
 * 写寄存器
 * @param {*从机地址} slaveId 
 * @param {*写入的地址} start 
 * @param {*写入的值} values 
 * @param {*写入成功或者失败回调} Callback 
 */
function writeRegisters(slaveId, start, values, Callback) {
    RNModbus.writeRegisters(slaveId, start, values, Callback)
}

/**
 * 读寄存器数据
 * @param {*从机地址} slaveId 
 * @param {*读取的寄存器地址} start 
 * @param {*读取的长度} len 
 * @param {*读取的回调} Callback 
 */
function readHoldingRegisters(slaveId, start, len, Callback) {
    RNModbus.readHoldingRegisters(slaveId, start, len, Callback)
}
export { openDevice, writeRegisters, readHoldingRegisters }

export default RNModbus;
