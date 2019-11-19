import { NativeModules } from 'react-native';

const { RNModbus } = NativeModules;

/**
 * 
 * @param {*串口编程口} path 
 * @param {*波特率} baudrate 
 * @param {*数据位} dataBits 
 * @param {*校验位} parity 
 * @param {*停止位} stopBits 0 (NONE), 1 (ODD), 2 (EVEN)
 */
function openDevice(path, baudrate, dataBits, parity, stopBits) {
    RNModbus.openDevice(path, baudrate, dataBits, parity, stopBits);
}

/**
 * 写多个寄存器
 * @param {*从机地址} slaveId 
 * @param {*写入的地址} start 
 * @param {*写入的值} values 
 * @param {*写入成功或者失败回调} Callback 
 */
function writeRegisters(slaveId, start, values) {
    RNModbus.writeRegisters(slaveId, start, values);
}

/**
 * 写单个寄存器
 * @param {* 从机地址} slaveId 
 * @param {* 寄存器地址} start 
 * @param {* 写入的值} value 
 * @param {* 回调} Callback 
 */
function writeSingleRegister(slaveId, start, value) {
    RNModbus.writeRegisters(slaveId, start, value);
}

/**
 * 读寄存器数据
 * @param {*从机地址} slaveId 
 * @param {*读取的寄存器地址} start 
 * @param {*读取的长度} len 
 * @param {*读取的回调} Callback 
 */
function readHoldingRegisters(slaveId, start, len) {
    RNModbus.readHoldingRegisters(slaveId, start, len);
}
export { openDevice, writeRegisters, readHoldingRegisters };

export default RNModbus;
