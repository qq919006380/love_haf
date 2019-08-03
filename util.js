export default {
    /* 修改所有对象的key
    arr(Array):目标数组对象
    keyMap(Object):旧key到新key的映射 例如
    keyMap={
        oldKey:"newKey",
        oldKey2:"newKey2"
    }
    A */
    cahngeKeyAll(arr, keyMap) {
        var a = arr.map((val) => {
            for (key in keyMap) {
                var newKey = keyMap[key]
                if (newKey) {
                    val[newKey] = val[key]
                    delete val[key]
                }
            }
            return val
        })
        return a
    }
}
