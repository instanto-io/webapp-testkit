"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
};
function jur_AbstractCharClass$LazyCharClass() {
    let a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
let jur_AbstractCharClass$LazyCharClass__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractCharClass$LazyCharClass_getValue = ($this, $negative) => {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = ($this.$computeValue()).$setNegative(1);
    if ($negative)
        return $this.$negValue;
    return $this.$posValue;
},
jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyBlank__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyBlank__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyBlank_computeValue = $this => {
    return ((jur_CharClass__init_()).$add(32)).$add(9);
},
jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyCntrl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyCntrl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyCntrl_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(0, 31)).$add(127);
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_2 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_1 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_0 = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_0(var_0);
    return var_0;
},
jl_Exception__init_ = ($this, $message) => {
    jl_Throwable__init_0($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_0($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_($this, $message);
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
jl_IndexOutOfBoundsException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IndexOutOfBoundsException__init_1 = var_0 => {
    let var_1 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_2(var_1, var_0);
    return var_1;
},
jur_SpecialToken = $rt_classWithoutFields(),
jur_SpecialToken__init_ = $this => {
    jl_Object__init_($this);
};
function jur_AbstractCharClass() {
    let a = this; jur_SpecialToken.call(a);
    a.$alt = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints0 = 0;
}
let jur_AbstractCharClass_charClasses = null,
jur_AbstractCharClass_$callClinit = () => {
    jur_AbstractCharClass_$callClinit = $rt_eraseClinit(jur_AbstractCharClass);
    jur_AbstractCharClass__clinit_();
},
jur_AbstractCharClass__init_ = $this => {
    jur_AbstractCharClass_$callClinit();
    jur_SpecialToken__init_($this);
    $this.$lowHighSurrogates = ju_BitSet__init_2(2048);
},
jur_AbstractCharClass_getBits = $this => {
    return null;
},
jur_AbstractCharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_AbstractCharClass_hasLowHighSurrogates = $this => {
    return !$this.$altSurrogates ? ($this.$lowHighSurrogates.$nextSetBit(0) >= 2048 ? 0 : 1) : $this.$lowHighSurrogates.$nextClearBit(0) >= 2048 ? 0 : 1;
},
jur_AbstractCharClass_mayContainSupplCodepoints = $this => {
    return $this.$mayContainSupplCodepoints0;
},
jur_AbstractCharClass_getInstance = $this => {
    return $this;
},
jur_AbstractCharClass_getSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithSurrogates = jur_AbstractCharClass$1__init_0($this, $lHS);
        $this.$charClassWithSurrogates.$setNegative($this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
},
jur_AbstractCharClass_getWithoutSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithoutSurrogates = jur_AbstractCharClass$2__init_0($this, $lHS, $this);
        $this.$charClassWithoutSurrogates.$setNegative($this.$isNegative());
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints0;
    }
    return $this.$charClassWithoutSurrogates;
},
jur_AbstractCharClass_hasUCI = $this => {
    return 0;
},
jur_AbstractCharClass_setNegative = ($this, $value) => {
    if ($this.$alt ^ $value) {
        $this.$alt = $this.$alt ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_AbstractCharClass_isNegative = $this => {
    return $this.$alt;
},
jur_AbstractCharClass_intersects0 = ($cc, $ch) => {
    jur_AbstractCharClass_$callClinit();
    return $cc.$contains($ch);
},
jur_AbstractCharClass_intersects = ($cc1, $cc2) => {
    jur_AbstractCharClass_$callClinit();
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null)
        return ($cc1.$getBits()).$intersects($cc2.$getBits());
    return 1;
},
jur_AbstractCharClass_getPredefinedClass = ($name, $negative) => {
    jur_AbstractCharClass_$callClinit();
    return (jur_AbstractCharClass$PredefinedCharacterClasses_getObject(jur_AbstractCharClass_charClasses, $name)).$getValue($negative);
},
jur_AbstractCharClass__clinit_ = () => {
    jur_AbstractCharClass_charClasses = jur_AbstractCharClass$PredefinedCharacterClasses__init_0();
};
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$026 = null;
}
let jur_AbstractCharClass$LazyJavaWhitespace$1__init_ = ($this, $this$0) => {
    $this.$this$026 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaWhitespace$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaWhitespace$1();
    jur_AbstractCharClass$LazyJavaWhitespace$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaWhitespace$1_contains = ($this, $ch) => {
    return jl_Character_isWhitespace($ch);
},
otj_JSObject = $rt_classWithoutFields(0),
cwtc_RenderFunction = $rt_classWithoutFields(0),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
ji_Serializable = $rt_classWithoutFields(0),
jl_Number = $rt_classWithoutFields(),
jl_Comparable = $rt_classWithoutFields(0),
jl_Integer = $rt_classWithoutFields(jl_Number),
jl_Integer_TYPE = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer_toString0 = ($i, $radix) => {
    jl_Integer_$callClinit();
    if (!($radix >= 2 && $radix <= 36))
        $radix = 10;
    return ((jl_AbstractStringBuilder__init_3(20)).$append1($i, $radix)).$toString();
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_toString = $i => {
    jl_Integer_$callClinit();
    return jl_Integer_toString0($i, 10);
},
jl_Integer_parseInt = ($s, $radix) => {
    jl_Integer_$callClinit();
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$length(), $radix);
    $rt_throw(jl_NumberFormatException__init_0($rt_s(0)));
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12, var$13, var$14;
    jl_Integer_$callClinit();
    if ($beginIndex == $endIndex)
        $rt_throw(jl_NumberFormatException__init_0($rt_s(1)));
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            switch ($s.$charAt($beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex)
            $rt_throw(jl_NumberFormatException__init_2());
        while (true) {
            if (var$6 >= $endIndex) {
                if ($negative)
                    $value =  -$value | 0;
                return $value;
            }
            var$9 = var$6 + 1 | 0;
            $digit = jl_Integer_decodeDigit($s.$charAt(var$6));
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(2)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$12 = new jl_NumberFormatException;
                var$13 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$14 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$14, $rt_s(3)), $radix), $rt_s(4)), var$13);
                jl_NumberFormatException__init_(var$12, jl_StringBuilder_toString(var$14));
                $rt_throw(var$12);
            }
            if ($value > $maxValue)
                break;
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(5)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        $rt_throw(jl_NumberFormatException__init_0($rt_s(6)));
    }
    var$11 = new jl_NumberFormatException;
    var$12 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$12, $rt_s(7)), $radix);
    jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$12));
    $rt_throw(var$11);
},
jl_Integer_decodeDigit = $c => {
    jl_Integer_$callClinit();
    if ($c >= 48 && $c <= 57)
        return $c - 48 | 0;
    if ($c >= 97 && $c <= 122)
        return ($c - 97 | 0) + 10 | 0;
    if ($c >= 65 && $c <= 90)
        return ($c - 65 | 0) + 10 | 0;
    return (-1);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 << 8;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 << 4;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 << 2;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_rotateLeft = ($i, $distance) => {
    let var$3;
    jl_Integer_$callClinit();
    var$3 = $distance & 31;
    return $i << var$3 | ($i >>> (32 - var$3 | 0) | 0);
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jur_AbstractSet() {
    let a = this; jl_Object.call(a);
    a.$next1 = null;
    a.$isSecondPassVisited = 0;
    a.$index2 = null;
    a.$type1 = 0;
}
let jur_AbstractSet_counter = 0,
jur_AbstractSet_$callClinit = () => {
    jur_AbstractSet_$callClinit = $rt_eraseClinit(jur_AbstractSet);
    jur_AbstractSet__clinit_();
},
jur_AbstractSet__init_ = $this => {
    let var$1;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$1 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$1 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$1);
},
jur_AbstractSet__init_0 = ($this, $n) => {
    let var$2;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$2);
    $this.$next1 = $n;
},
jur_AbstractSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $length;
    $length = $matchResult.$getRightBound();
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_AbstractSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_AbstractSet_setType = ($this, $type) => {
    $this.$type1 = $type;
},
jur_AbstractSet_getType = $this => {
    return $this.$type1;
},
jur_AbstractSet_getNext = $this => {
    return $this.$next1;
},
jur_AbstractSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AbstractSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next1 !== null) {
        if (!$this.$next1.$isSecondPassVisited) {
            $set = $this.$next1.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next1.$isSecondPassVisited = 1;
                $this.$next1 = $set;
            }
            $this.$next1.$processSecondPass();
        } else if ($this.$next1 instanceof jur_SingleSet && $this.$next1.$fSet.$isBackReferenced)
            $this.$next1 = $this.$next1.$next1;
    }
},
jur_AbstractSet__clinit_ = () => {
    jur_AbstractSet_counter = 1;
};
function jur_JointSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex = 0;
}
let jur_JointSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_JointSet__init_2 = () => {
    let var_0 = new jur_JointSet();
    jur_JointSet__init_(var_0);
    return var_0;
},
jur_JointSet__init_0 = ($this, $children, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_JointSet__init_1 = (var_0, var_1) => {
    let var_2 = new jur_JointSet();
    jur_JointSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_JointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    if ($this.$children === null)
        return (-1);
    $start = $matchResult.$getStart($this.$groupIndex);
    $matchResult.$setStart($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size) {
            $matchResult.$setStart($this.$groupIndex, $start);
            return (-1);
        }
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_JointSet_setNext = ($this, $next) => {
    $this.$fSet.$setNext($next);
},
jur_JointSet_first = ($this, $set) => {
    let $i;
    a: {
        if ($this.$children !== null) {
            $i = $this.$children.$iterator();
            while (true) {
                if (!$i.$hasNext())
                    break a;
                if (!($i.$next()).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
},
jur_JointSet_hasConsumed = ($this, $matchResult) => {
    let var$2, var$3;
    a: {
        if ($matchResult.$getEnd($this.$groupIndex) >= 0) {
            var$2 = $matchResult.$getStart($this.$groupIndex);
            var$3 = $this.$groupIndex;
            if (var$2 == $matchResult.$getEnd(var$3)) {
                var$2 = 0;
                break a;
            }
        }
        var$2 = 1;
    }
    return var$2;
},
jur_JointSet_processSecondPass = $this => {
    let $childrenSize, $i, $child, $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    a: {
        if ($this.$children !== null) {
            $childrenSize = $this.$children.$size();
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = $this.$children.$get($i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    $this.$children.$remove($i);
                    $this.$children.$add1($i, $set);
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
        }
    }
    if ($this.$next1 !== null)
        jur_AbstractSet_processSecondPass($this);
};
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
let jur_SingleSet__init_ = ($this, $child, $fSet) => {
    jur_JointSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_SingleSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_SingleSet();
    jur_SingleSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_SingleSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $shift;
    $start = $matchResult.$getStart($this.$groupIndex);
    $matchResult.$setStart($this.$groupIndex, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    $matchResult.$setStart($this.$groupIndex, $start);
    return (-1);
},
jur_SingleSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$find($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_findBack = ($this, $stringIndex, $lastIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_first = ($this, $set) => {
    return $this.$kid.$first($set);
},
jur_SingleSet_processBackRefReplacement = $this => {
    let $set;
    $set = jur_BackReferencedSingleSet__init_0($this);
    $this.$next1 = $set;
    return $set;
},
jur_SingleSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    if ($this.$kid !== null && !$this.$kid.$isSecondPassVisited) {
        $set = $this.$kid.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
},
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Document = $rt_classWithoutFields(0),
otjde_EventTarget = $rt_classWithoutFields(0),
otjdh_HTMLDocument = $rt_classWithoutFields(),
otjdh_HTMLDocument_current = () => {
    return window.document;
},
cwtc_ReactView$ViewFactory = $rt_classWithoutFields(0),
cwtd_App$renderApp$lambda$_2_11 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_11__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_11__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_11();
    cwtd_App$renderApp$lambda$_2_11__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_11_create = var$0 => {
    return cwtd_App$CharCounterView__init_0();
};
function jur_SequenceSet$IntHash() {
    let a = this; jl_Object.call(a);
    a.$table0 = null;
    a.$values = null;
    a.$mask = 0;
    a.$size2 = 0;
}
let jur_SequenceSet$IntHash__init_0 = ($this, $size) => {
    jl_Object__init_($this);
    while ($size >= $this.$mask) {
        $this.$mask = $this.$mask << 1 | 1;
    }
    $this.$mask = $this.$mask << 1 | 1;
    $this.$table0 = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$values = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$size2 = $size;
},
jur_SequenceSet$IntHash__init_ = var_0 => {
    let var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
},
jur_SequenceSet$IntHash_put = ($this, $key, $value) => {
    let $i, $hashCode, var$5;
    $i = 0;
    $hashCode = $key & $this.$mask;
    while ($this.$table0.data[$hashCode] && $this.$table0.data[$hashCode] != $key) {
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    $this.$table0.data[$hashCode] = $key;
    $this.$values.data[$hashCode] = $value;
},
jur_SequenceSet$IntHash_get = ($this, $key) => {
    let $hashCode, $i, $storedKey, var$5;
    $hashCode = $key & $this.$mask;
    $i = 0;
    while (true) {
        $storedKey = $this.$table0.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values.data[$hashCode];
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    return $this.$size2;
},
jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyAlpha__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyAlpha__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlpha_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90);
},
cwtd_App$renderApp$lambda$_2_12 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_12__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_12__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_12();
    cwtd_App$renderApp$lambda$_2_12__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_12_render = (var$0, var$1) => {
    return cwtd_App_renderUseRefDemo(var$1);
},
cwtd_App$renderApp$lambda$_2_12_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
cwtd_App$renderApp$lambda$_2_13 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_13__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_13__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_13();
    cwtd_App$renderApp$lambda$_2_13__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_13_render = (var$0, var$1) => {
    return cwtd_App_renderUseContextDemo(var$1);
},
cwtd_App$renderApp$lambda$_2_13_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
cwtd_App$renderApp$lambda$_2_14 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_14__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_14__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_14();
    cwtd_App$renderApp$lambda$_2_14__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_14_render = (var$0, var$1) => {
    return cwtd_App_renderUseMemoDemo(var$1);
},
cwtd_App$renderApp$lambda$_2_14_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyDigit_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(48, 57);
},
jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit),
jur_AbstractCharClass$LazyNonDigit__init_ = $this => {
    jur_AbstractCharClass$LazyDigit__init_($this);
},
jur_AbstractCharClass$LazyNonDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonDigit_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyDigit_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
cwte_ChangeEventHandler = $rt_classWithoutFields(0);
function cwtd_App$CharCounterView$render$lambda$_1_0() {
    jl_Object.call(this);
    this.$_024 = null;
}
let cwtd_App$CharCounterView$render$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_024 = var$1;
},
cwtd_App$CharCounterView$render$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$CharCounterView$render$lambda$_1_0();
    cwtd_App$CharCounterView$render$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$CharCounterView$render$lambda$_1_0_handleEvent = (var$0, var$1) => {
    cwtd_App$CharCounterView_lambda$render$0(var$0.$_024, var$1);
},
cwtd_App$CharCounterView$render$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet),
jur_BackReferencedSingleSet__init_ = ($this, $node) => {
    jur_SingleSet__init_($this, $node.$kid, $node.$fSet);
},
jur_BackReferencedSingleSet__init_0 = var_0 => {
    let var_1 = new jur_BackReferencedSingleSet();
    jur_BackReferencedSingleSet__init_(var_1, var_0);
    return var_1;
},
jur_BackReferencedSingleSet_find = ($this, $startSearch, $testString, $matchResult) => {
    let $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$getRightBound();
    a: {
        while (true) {
            if ($startSearch > $lastIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = $matchResult.$getStart($this.$groupIndex);
            $matchResult.$setStart($this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            $matchResult.$setStart($this.$groupIndex, $saveStart);
            $startSearch = $startSearch + 1 | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $res, $saveStart;
    $res = 0;
    a: {
        while (true) {
            if ($startSearch < $stringIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = $matchResult.$getStart($this.$groupIndex);
            $matchResult.$setStart($this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            $matchResult.$setStart($this.$groupIndex, $saveStart);
            $startSearch = $startSearch + (-1) | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_processBackRefReplacement = $this => {
    return null;
};
function jur_CIBackReferenceSet() {
    let a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter1 = 0;
}
let jur_CIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_JointSet__init_($this);
    $this.$referencedGroup = $groupIndex;
    $this.$consCounter1 = $consCounter;
},
jur_CIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= $group.$length()) {
                $matchResult.$setConsumed($this.$consCounter1, $group.$length());
                return $this.$next1.$matches($stringIndex + $group.$length() | 0, $testString, $matchResult);
            }
            var$6 = $group.$charAt($i);
            var$7 = $stringIndex + $i | 0;
            if (var$6 != $testString.$charAt(var$7) && jur_Pattern_getSupplement($group.$charAt($i)) != $testString.$charAt(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_CIBackReferenceSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_CIBackReferenceSet_getString = ($this, $matchResult) => {
    let $res;
    $res = $matchResult.$getGroupNoCheck($this.$referencedGroup);
    return $res;
},
jur_CIBackReferenceSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter1) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter1, (-1));
    return $res;
},
jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyWord__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyWord_computeValue = $this => {
    return ((((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90)).$add0(48, 57)).$add(95);
},
jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord),
jur_AbstractCharClass$LazyNonWord__init_ = $this => {
    jur_AbstractCharClass$LazyWord__init_($this);
},
jur_AbstractCharClass$LazyNonWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonWord_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyWord_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_AbstractCharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$025 = null;
}
let jur_AbstractCharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$025 = $this$0;
    $this.$val$lHS = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$1();
    jur_AbstractCharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$1_contains = ($this, $ch) => {
    let $index;
    $index = $ch - 55296 | 0;
    return $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ $this.$val$lHS.$get0($index) : 0;
},
cwtd_App$renderApp$lambda$_2_10 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_10__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_10__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_10();
    cwtd_App$renderApp$lambda$_2_10__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_10_create = var$0 => {
    return cwtd_App$StopwatchView__init_0();
};
function jur_AbstractCharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$016 = null;
}
let jur_AbstractCharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$016 = $this$0;
    $this.$val$lHS0 = var$2;
    $this.$val$thisClass = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$2();
    jur_AbstractCharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$2_contains = ($this, $ch) => {
    let $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ $this.$val$lHS0.$get0($index) : 0;
    return $this.$val$thisClass.$contains($ch) && !$containslHS ? 1 : 0;
},
jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLowerCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLowerCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLowerCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount0 = 0;
}
let jur_LeafSet__init_0 = ($this, $next) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount0 = 1;
    $this.$setType(1);
},
jur_LeafSet__init_ = $this => {
    jur_AbstractSet__init_($this);
    $this.$charCount0 = 1;
},
jur_LeafSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    if (($stringIndex + $this.$charCount() | 0) > $matchResult.$getRightBound()) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $shift = $this.$accepts($stringIndex, $testString);
    if ($shift < 0)
        return (-1);
    return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
},
jur_LeafSet_charCount = $this => {
    return $this.$charCount0;
},
jur_LeafSet_hasConsumed = ($this, $mr) => {
    return 1;
};
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
let jur_CISequenceSet__init_ = ($this, $substring) => {
    jur_LeafSet__init_($this);
    $this.$string1 = $substring.$toString();
    $this.$charCount0 = $substring.$length();
},
jur_CISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_CISequenceSet();
    jur_CISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_CISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5, var$6;
    $i = 0;
    while (true) {
        if ($i >= $this.$string1.$length())
            return $this.$string1.$length();
        var$4 = $this.$string1.$charAt($i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != $testString.$charAt(var$5)) {
            var$6 = $this.$string1;
            if (jur_Pattern_getSupplement(var$6.$charAt($i)) != $testString.$charAt(var$5))
                break;
        }
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
let jur_QuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$setType($type);
},
jur_QuantifierSet_getInnerSet = $this => {
    return $this.$innerSet;
},
jur_QuantifierSet_first = ($this, $set) => {
    return !$this.$innerSet.$first($set) && !$this.$next1.$first($set) ? 0 : 1;
},
jur_QuantifierSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_QuantifierSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next1 !== null && !$this.$next1.$isSecondPassVisited) {
        $set = $this.$next1.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next1.$isSecondPassVisited = 1;
            $this.$next1 = $set;
        }
        $this.$next1.$processSecondPass();
    }
    if ($this.$innerSet !== null) {
        if (!$this.$innerSet.$isSecondPassVisited) {
            $set = $this.$innerSet.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($this.$innerSet instanceof jur_SingleSet && $this.$innerSet.$fSet.$isBackReferenced)
            $this.$innerSet = $this.$innerSet.$next1;
    }
};
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
let jur_LeafQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
},
jur_LeafQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_LeafQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $i, var$5;
    $i = 0;
    a: {
        while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
            var$5 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$5 <= 0)
                break a;
            $stringIndex = $stringIndex + var$5 | 0;
            $i = $i + 1 | 0;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
};
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier = null;
}
let jur_CompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
},
jur_CompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min();
    $max = $this.$quantifier.$max();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while ($i < $max) {
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break a;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_PossessiveCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_PossessiveCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_PossessiveCompositeQuantifierSet();
    jur_PossessiveCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_PossessiveCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min();
    $max = $this.$quantifier.$max();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jl_CharSequence = $rt_classWithoutFields(0),
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_0 = $this => {
    jl_IndexOutOfBoundsException__init_0($this);
},
jl_StringIndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_0(var_0);
    return var_0;
};
function ju_MissingResourceException() {
    let a = this; jl_RuntimeException.call(a);
    a.$className1 = null;
    a.$key0 = null;
}
let ju_MissingResourceException__init_ = ($this, $s, $className, $key) => {
    jl_RuntimeException__init_0($this, $s);
    $this.$className1 = $className;
    $this.$key0 = $key;
},
ju_MissingResourceException__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_MissingResourceException();
    ju_MissingResourceException__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
let jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_ = ($this, $this$0) => {
    $this.$this$027 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1();
    jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains = ($this, $ch) => {
    return jl_Character_isLetterOrDigit($ch);
};
function jur_CharClass$18() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$010 = null;
}
let jur_CharClass$18__init_ = ($this, $this$0, var$2) => {
    $this.$this$010 = $this$0;
    $this.$val$bs = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$18__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$18();
    jur_CharClass$18__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$18_contains = ($this, $ch) => {
    return $this.$alt ^ $this.$val$bs.$get0($ch);
},
jur_CharClass$18_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$val$bs.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append3(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$val$bs.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
},
jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_GroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_GroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_GroupQuantifierSet();
    jur_GroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_GroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PossessiveGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PossessiveGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveGroupQuantifierSet();
    jur_PossessiveGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_UCIBackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_UCIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_UCIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_UCIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= $group.$length()) {
                $matchResult.$setConsumed($this.$consCounter1, $group.$length());
                return $this.$next1.$matches($stringIndex + $group.$length() | 0, $testString, $matchResult);
            }
            var$6 = jl_Character_toLowerCase(jl_Character_toUpperCase($group.$charAt($i)));
            var$7 = $stringIndex + $i | 0;
            var$7 = jl_Character_toUpperCase($testString.$charAt(var$7));
            if (var$6 != jl_Character_toLowerCase(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
};
function jur_CharClass$13() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$this$020 = null;
}
let jur_CharClass$13__init_ = ($this, $this$0, var$2) => {
    $this.$this$020 = $this$0;
    $this.$val$clazz4 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$13__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$13();
    jur_CharClass$13__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$13_contains = ($this, $ch) => {
    return $this.$val$clazz4.$contains($ch);
};
function jur_CharClass$12() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz5 = null;
    a.$this$030 = null;
}
let jur_CharClass$12__init_ = ($this, $this$0, var$2) => {
    $this.$this$030 = $this$0;
    $this.$val$clazz5 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$12__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$12();
    jur_CharClass$12__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$12_contains = ($this, $ch) => {
    return $this.$val$clazz5.$contains($ch) ? 0 : 1;
};
function jur_CharClass$11() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt4 = 0;
    a.$val$nb2 = null;
    a.$val$clazz8 = null;
    a.$this$011 = null;
}
let jur_CharClass$11__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$011 = $this$0;
    $this.$val$curAlt4 = var$2;
    $this.$val$nb2 = var$3;
    $this.$val$clazz8 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$11__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$11();
    jur_CharClass$11__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$11_contains = ($this, $ch) => {
    return !($this.$val$curAlt4 ^ $this.$val$nb2.$contains($ch)) && !$this.$val$clazz8.$contains($ch) ? 0 : 1;
};
function jur_AbstractCharClass$LazyCategory() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category1 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates0 = 0;
}
let jur_AbstractCharClass$LazyCategory__init_0 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategory__init_1 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategory_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategory__init_0($this.$category1);
    if ($this.$containsAllSurrogates0)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints1;
    return $chCl;
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, var$5, $digit, $hasMore;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit = $c => {
    if ($c < 34)
        return $c - 32 | 0;
    if ($c >= 92)
        return ($c - 32 | 0) - 2 | 0;
    return ($c - 32 | 0) - 1 | 0;
};
function jur_CharClass$10() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt6 = 0;
    a.$val$nb0 = null;
    a.$val$clazz0 = null;
    a.$this$018 = null;
}
let jur_CharClass$10__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$018 = $this$0;
    $this.$val$curAlt6 = var$2;
    $this.$val$nb0 = var$3;
    $this.$val$clazz0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$10__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$10();
    jur_CharClass$10__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$10_contains = ($this, $ch) => {
    return !($this.$val$curAlt6 ^ $this.$val$nb0.$contains($ch)) && !$this.$val$clazz0.$contains($ch) ? 1 : 0;
};
function jur_CharClass$17() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt5 = 0;
    a.$val$nb1 = null;
    a.$val$clazz10 = null;
    a.$this$015 = null;
}
let jur_CharClass$17__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$015 = $this$0;
    $this.$val$curAlt5 = var$2;
    $this.$val$nb1 = var$3;
    $this.$val$clazz10 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$17__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$17();
    jur_CharClass$17__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$17_contains = ($this, $ch) => {
    return $this.$val$curAlt5 ^ $this.$val$nb1.$contains($ch) && $this.$val$clazz10.$contains($ch) ? 1 : 0;
};
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string2 = null;
}
let jur_UCISequenceSet__init_ = ($this, $substring) => {
    let $res, $i;
    jur_LeafSet__init_($this);
    $res = jl_StringBuilder__init_();
    $i = 0;
    while ($i < $substring.$length()) {
        $res.$append0(jl_Character_toLowerCase(jl_Character_toUpperCase($substring.$charAt($i))));
        $i = $i + 1 | 0;
    }
    $this.$string2 = $res.$toString();
    $this.$charCount0 = $res.$length();
},
jur_UCISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i;
    $i = 0;
    while (true) {
        if ($i >= $this.$string2.$length())
            return $this.$string2.$length();
        if ($this.$string2.$charAt($i) != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex + $i | 0))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_CharClass$16() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt3 = 0;
    a.$val$nb = null;
    a.$val$clazz3 = null;
    a.$this$022 = null;
}
let jur_CharClass$16__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$022 = $this$0;
    $this.$val$curAlt3 = var$2;
    $this.$val$nb = var$3;
    $this.$val$clazz3 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$16__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$16();
    jur_CharClass$16__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$16_contains = ($this, $ch) => {
    return $this.$val$curAlt3 ^ $this.$val$nb.$contains($ch) && $this.$val$clazz3.$contains($ch) ? 0 : 1;
},
jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_DotAllQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_DotAllQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_DotAllQuantifierSet();
    jur_DotAllQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_DotAllQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotAllQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult) >= 0)
        return $stringIndex;
    return (-1);
};
function jur_CharClass$15() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz9 = null;
    a.$val$curAlt1 = 0;
    a.$this$05 = null;
}
let jur_CharClass$15__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$05 = $this$0;
    $this.$val$clazz9 = var$2;
    $this.$val$curAlt1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$15__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$15();
    jur_CharClass$15__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$15_contains = ($this, $ch) => {
    return $this.$val$clazz9.$contains($ch) && $this.$val$curAlt1 ^ $this.$this$05.$bits.$get0($ch) ? 1 : 0;
};
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$024 = null;
}
let jur_AbstractCharClass$LazyJavaDefined$1__init_ = ($this, $this$0) => {
    $this.$this$024 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDefined$1();
    jur_AbstractCharClass$LazyJavaDefined$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDefined$1_contains = ($this, $ch) => {
    return jl_Character_isDefined($ch);
},
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper_lambda$static$1 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_numberWrappers.delete($token);
},
otji_JSWrapper$Helper_lambda$static$0 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_stringWrappers.delete($token);
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = var$1;
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
};
function jur_CharClass$14() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$val$curAlt10 = 0;
    a.$this$03 = null;
}
let jur_CharClass$14__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$03 = $this$0;
    $this.$val$clazz2 = var$2;
    $this.$val$curAlt10 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$14__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$14();
    jur_CharClass$14__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$14_contains = ($this, $ch) => {
    return $this.$val$clazz2.$contains($ch) && $this.$val$curAlt10 ^ $this.$this$03.$bits.$get0($ch) ? 0 : 1;
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_118_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_118_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_118_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_118_0();
    jl_String$_clinit_$lambda$_118_0__init_(var_0);
    return var_0;
};
function jur_FSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex0 = 0;
}
let jur_FSet_posFSet = null,
jur_FSet_$callClinit = () => {
    jur_FSet_$callClinit = $rt_eraseClinit(jur_FSet);
    jur_FSet__clinit_();
},
jur_FSet__init_ = ($this, $groupIndex) => {
    jur_FSet_$callClinit();
    jur_AbstractSet__init_($this);
    $this.$groupIndex0 = $groupIndex;
},
jur_FSet__init_0 = var_0 => {
    let var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
},
jur_FSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $end, $shift;
    $end = $matchResult.$getEnd($this.$groupIndex0);
    $matchResult.$setEnd($this.$groupIndex0, $stringIndex);
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $matchResult.$setEnd($this.$groupIndex0, $end);
    return $shift;
},
jur_FSet_getGroupIndex = $this => {
    return $this.$groupIndex0;
},
jur_FSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FSet__clinit_ = () => {
    jur_FSet_posFSet = jur_FSet$PossessiveFSet__init_0();
},
jur_BehindFSet = $rt_classWithoutFields(jur_FSet),
jur_BehindFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_BehindFSet__init_0 = var_0 => {
    let var_1 = new jur_BehindFSet();
    jur_BehindFSet__init_(var_1, var_0);
    return var_1;
},
jur_BehindFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr, $rightBound;
    $gr = $this.$getGroupIndex();
    $rightBound = $matchResult.$getConsumed($gr);
    if ($rightBound != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this, 16);
},
jl_AbstractStringBuilder__init_6 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_ = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_3 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_2 = ($this, $value) => {
    jl_AbstractStringBuilder__init_1($this, $value);
},
jl_AbstractStringBuilder__init_5 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_2(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_1 = ($this, $value) => {
    let $i;
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($value.$length());
    $i = 0;
    while ($i < $this.$buffer.data.length) {
        $this.$buffer.data[$i] = $value.$charAt($i);
        $i = $i + 1 | 0;
    }
    $this.$length0 = $value.$length();
},
jl_AbstractStringBuilder__init_4 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append4 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_append2 = ($this, $string) => {
    return $this.$insert0($this.$length0, $string);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(8);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append3 = ($this, $value) => {
    return $this.$append1($value, 10);
},
jl_AbstractStringBuilder_append5 = ($this, $value, $radix) => {
    return $this.$insert1($this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert3 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append1 = ($this, $c) => {
    return $this.$insert2($this.$length0, $c);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert2 = ($this, $index, $obj) => {
    return $this.$insert0($index, $obj === null ? $rt_s(8) : $obj.$toString());
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf1($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_1($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_length = $this => {
    return $this.$length0;
},
jl_AbstractStringBuilder_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$length0)
        return $this.$buffer.data[$index];
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append0 = ($this, $chars, $offset, $len) => {
    return $this.$insert3($this.$length0, $chars, $offset, $len);
},
jl_AbstractStringBuilder_insert = ($this, $index, $chars, $offset, $len) => {
    let var$5, var$6, var$7, var$8, var$9;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        var$8 = $index + 1 | 0;
        var$9 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = var$8;
        $offset = var$9;
    }
    return $this;
},
jl_AbstractStringBuilder_append = ($this, $chars) => {
    return $this.$append4($chars, 0, $chars.data.length);
},
jl_AbstractStringBuilder_deleteCharAt = ($this, $i) => {
    let var$2, var$3, $i_0;
    if ($i >= 0 && $i < $this.$length0) {
        $this.$length0 = $this.$length0 - 1 | 0;
        while ($i < $this.$length0) {
            var$2 = $this.$buffer.data;
            var$3 = $this.$buffer.data;
            $i_0 = $i + 1 | 0;
            var$2[$i] = var$3[$i_0];
            $i = $i_0;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_delete = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6, var$7, var$8;
    if ($start >= 0) {
        var$3 = $rt_compare($start, $end);
        if (var$3 <= 0 && $start <= $this.$length0) {
            if (!var$3)
                return $this;
            if ($end > $this.$length0)
                $end = $this.$length0;
            $sz = $this.$length0 - $end | 0;
            $this.$length0 = $this.$length0 - ($end - $start | 0) | 0;
            $i = 0;
            while ($i < $sz) {
                var$6 = $this.$buffer.data;
                var$3 = $start + 1 | 0;
                var$7 = $this.$buffer.data;
                var$8 = $end + 1 | 0;
                var$6[$start] = var$7[$end];
                $i = $i + 1 | 0;
                $start = var$3;
                $end = var$8;
            }
            return $this;
        }
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_AbstractStringBuilder_reverse = $this => {
    let $half, $i, $tmp_0;
    $half = $this.$length0 / 2 | 0;
    $i = 0;
    while ($i < $half) {
        $tmp_0 = $this.$buffer.data[$i];
        $this.$buffer.data[$i] = $this.$buffer.data[($this.$length0 - $i | 0) - 1 | 0];
        $this.$buffer.data[($this.$length0 - $i | 0) - 1 | 0] = $tmp_0;
        $i = $i + 1 | 0;
    }
    return $this;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_3 = ($this, $capacity) => {
    jl_AbstractStringBuilder__init_($this, $capacity);
},
jl_StringBuilder__init_0 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_3(var_1, var_0);
    return var_1;
},
jl_StringBuilder__init_2 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_2(var_0);
    return var_0;
},
jl_StringBuilder__init_1 = ($this, $value) => {
    jl_AbstractStringBuilder__init_2($this, $value);
},
jl_StringBuilder__init_4 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append4($this, $obj);
    return $this;
},
jl_StringBuilder_append2 = ($this, $string) => {
    jl_AbstractStringBuilder_append2($this, $string);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    jl_AbstractStringBuilder_append3($this, $value);
    return $this;
},
jl_StringBuilder_append1 = ($this, $c) => {
    jl_AbstractStringBuilder_append1($this, $c);
    return $this;
},
jl_StringBuilder_append3 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append0($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_append5 = ($this, $chars) => {
    jl_AbstractStringBuilder_append($this, $chars);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert2($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert0($this, $index, $c);
    return $this;
},
jl_StringBuilder_delete = ($this, $start, $end) => {
    jl_AbstractStringBuilder_delete($this, $start, $end);
    return $this;
},
jl_StringBuilder_deleteCharAt = ($this, $index) => {
    jl_AbstractStringBuilder_deleteCharAt($this, $index);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert1($this, $index, $string);
    return $this;
},
jl_StringBuilder_reverse = $this => {
    jl_AbstractStringBuilder_reverse($this);
    return $this;
},
jl_StringBuilder_insert4 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert4(var$1, var$2, var$3, var$4);
};
let jl_StringBuilder_append4 = ($this, var$1, var$2, var$3) => {
    return $this.$append10(var$1, var$2, var$3);
},
jl_StringBuilder_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert5(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert6(var$1, var$2);
},
jl_StringBuilder_insert6 = ($this, var$1, var$2) => {
    return $this.$insert7(var$1, var$2);
},
jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha),
jur_AbstractCharClass$LazyAlnum__init_ = $this => {
    jur_AbstractCharClass$LazyAlpha__init_($this);
},
jur_AbstractCharClass$LazyAlnum__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlnum_computeValue = $this => {
    return (jur_AbstractCharClass$LazyAlpha_computeValue($this)).$add0(48, 57);
};
function jur_CompositeRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
let jur_CompositeRangeSet__init_0 = ($this, $withoutSurrogates, $withSurrogates) => {
    jur_JointSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
},
jur_CompositeRangeSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CompositeRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$withSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return (-1);
},
jur_CompositeRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$withSurrogates.$setNext($next);
    $this.$withoutSurrogates.$setNext($next);
},
jur_CompositeRangeSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CompositeRangeSet_first = ($this, $set) => {
    return 1;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_0 = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_(var_0);
    return var_0;
};
function cwth_RefHandle() {
    jl_Object.call(this);
    this.$ref = null;
}
let cwth_RefHandle__init_ = ($this, $ref) => {
    jl_Object__init_($this);
    $this.$ref = $ref;
},
cwth_RefHandle__init_0 = var_0 => {
    let var_1 = new cwth_RefHandle();
    cwth_RefHandle__init_(var_1, var_0);
    return var_1;
},
cwth_RefHandle_getCurrentInt = $this => {
    return $this.$ref.current | 0;
},
cwth_RefHandle_setCurrentInt = ($this, $value) => {
    $this.$ref.current = $value;
};
function jur_LowHighSurrogateRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt0 = 0;
}
let jur_LowHighSurrogateRangeSet__init_ = ($this, $surrChars) => {
    jur_JointSet__init_($this);
    $this.$surrChars = $surrChars.$getInstance();
    $this.$alt0 = $surrChars.$alt;
},
jur_LowHighSurrogateRangeSet__init_0 = var_0 => {
    let var_1 = new jur_LowHighSurrogateRangeSet();
    jur_LowHighSurrogateRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_LowHighSurrogateRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowHighSurrogateRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $startStr, $strLength, var$6, var$7, $ch, $low, $high;
    $startStr = $matchResult.$getLeftBound();
    $strLength = $matchResult.$getRightBound();
    var$6 = $stringIndex + 1 | 0;
    var$7 = $rt_compare(var$6, $strLength);
    if (var$7 > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $ch = $testString.$charAt($stringIndex);
    if (!$this.$surrChars.$contains($ch))
        return (-1);
    if (jl_Character_isHighSurrogate($ch)) {
        if (var$7 < 0) {
            $low = $testString.$charAt(var$6);
            if (jl_Character_isLowSurrogate($low))
                return (-1);
        }
    } else if (jl_Character_isLowSurrogate($ch) && $stringIndex > $startStr) {
        $high = $testString.$charAt($stringIndex - 1 | 0);
        if (jl_Character_isHighSurrogate($high))
            return (-1);
    }
    return $this.$next1.$matches(var$6, $testString, $matchResult);
},
jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_ReluctantGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantGroupQuantifierSet();
    jur_ReluctantGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $res = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        return $res;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_FinalSet = $rt_classWithoutFields(jur_FSet),
jur_FinalSet__init_ = $this => {
    jur_FSet__init_($this, 0);
},
jur_FinalSet__init_0 = () => {
    let var_0 = new jur_FinalSet();
    jur_FinalSet__init_(var_0);
    return var_0;
},
jur_FinalSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($matchResult.$mode() != 1 && $stringIndex != $matchResult.$getRightBound())
        return (-1);
    $matchResult.$setValid();
    $matchResult.$setEnd(0, $stringIndex);
    return $stringIndex;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PosPlusGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosPlusGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosPlusGroupQuantifierSet();
    jur_PosPlusGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosPlusGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex, var$5;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        return (-1);
    if ($nextIndex > $stringIndex) {
        while (true) {
            var$5 = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
            if (var$5 <= $nextIndex)
                break;
            $nextIndex = var$5;
        }
        $stringIndex = $nextIndex;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_EmptySet = $rt_classWithoutFields(jur_LeafSet),
jur_EmptySet__init_0 = ($this, $next) => {
    jur_LeafSet__init_0($this, $next);
    $this.$charCount0 = 0;
},
jur_EmptySet__init_ = var_0 => {
    let var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
},
jur_EmptySet_accepts = ($this, $stringIndex, $testString) => {
    return 0;
},
jur_EmptySet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startStr, var$6, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        var$6 = $rt_compare($stringIndex, $strLength);
        if (var$6 > 0)
            return (-1);
        if (var$6 < 0) {
            $low = $testString.$charAt($stringIndex);
            if (jl_Character_isLowSurrogate($low) && $stringIndex > $startStr) {
                $high = $testString.$charAt($stringIndex - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $stringIndex = $stringIndex + 1 | 0;
                    continue;
                }
            }
        }
        if ($this.$next1.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_EmptySet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $strLength, $startStr, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength) {
            $low = $testString.$charAt($startSearch);
            if (jl_Character_isLowSurrogate($low) && $startSearch > $startStr) {
                $high = $testString.$charAt($startSearch - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $startSearch = $startSearch + (-1) | 0;
                    continue;
                }
            }
        }
        if ($this.$next1.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_EmptySet_hasConsumed = ($this, $mr) => {
    return 0;
},
cwte_EventHandler = $rt_classWithoutFields(0);
function cwtd_App$renderUseMemoDemo$lambda$_17_0() {
    jl_Object.call(this);
    this.$_031 = null;
}
let cwtd_App$renderUseMemoDemo$lambda$_17_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_031 = var$1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderUseMemoDemo$lambda$_17_0();
    cwtd_App$renderUseMemoDemo$lambda$_17_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderUseMemoDemo$40(var$0.$_031, var$1);
},
cwtd_App$renderUseMemoDemo$lambda$_17_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderUseMemoDemo$lambda$_17_1() {
    jl_Object.call(this);
    this.$_041 = null;
}
let cwtd_App$renderUseMemoDemo$lambda$_17_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_041 = var$1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderUseMemoDemo$lambda$_17_1();
    cwtd_App$renderUseMemoDemo$lambda$_17_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderUseMemoDemo$42(var$0.$_041, var$1);
},
cwtd_App$renderUseMemoDemo$lambda$_17_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
cwtc_ReactView = $rt_classWithoutFields(),
cwtc_ReactView__init_ = $this => {
    jl_Object__init_($this);
},
cwtc_ReactView_onMount = $this => {
    return;
},
cwtc_ReactView_onUnmount = $this => {
    return;
},
cwtc_ReactView_view = ($factory, $displayName) => {
    return React.createElement(cwtc_ReactView_toComponent($factory, $displayName), null);
},
cwtc_ReactView_toComponent = ($factory, $displayName) => {
    let $renderFn;
    $renderFn = cwtc_ReactView$toComponent$lambda$_6_0__init_0($factory);
    return cwtc_React_wrapComponent$js_body$_8(otji_JS_function(otji_JSWrapper_unwrap($renderFn), "render"), $rt_ustr($displayName));
},
cwtc_ReactView_lambda$toComponent$1 = ($factory, $props) => {
    let $view, var$4, var$5;
    $view = $factory.$create();
    var$4 = cwtc_ReactView$lambda$toComponent$1$lambda$_7_0__init_0($view);
    var$5 = cwth_Hooks_deps();
    cwth_Hooks_useEffect0(otji_JSWrapper_unwrap(var$4), var$5);
    return $view.$render0();
},
cwtc_ReactView_lambda$toComponent$0 = $view => {
    $view.$onMount();
    ju_Objects_requireNonNull0($view);
    return otji_JSWrapper_unwrap(cwtc_ReactView$lambda$toComponent$0$lambda$_8_0__init_0($view));
};
function cwtd_App$renderUseMemoDemo$lambda$_17_2() {
    jl_Object.call(this);
    this.$_020 = null;
}
let cwtd_App$renderUseMemoDemo$lambda$_17_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_020 = var$1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderUseMemoDemo$lambda$_17_2();
    cwtd_App$renderUseMemoDemo$lambda$_17_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderUseMemoDemo$lambda$_17_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderUseMemoDemo$44(var$0.$_020, var$1);
},
cwtd_App$renderUseMemoDemo$lambda$_17_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuffer__init_0 = () => {
    let var_0 = new jl_StringBuffer();
    jl_StringBuffer__init_(var_0);
    return var_0;
},
jl_StringBuffer_append1 = ($this, $c) => {
    jl_AbstractStringBuilder_append1($this, $c);
    return $this;
},
jl_StringBuffer_append2 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append0($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_append0 = ($this, $chars) => {
    jl_AbstractStringBuilder_append($this, $chars);
    return $this;
},
jl_StringBuffer_insert = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert0($this, $index, $c);
    return $this;
},
jl_StringBuffer_insert1 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert8(var$1, var$2, var$3, var$4);
},
jl_StringBuffer_append = ($this, var$1, var$2, var$3) => {
    return $this.$append11(var$1, var$2, var$3);
},
jl_StringBuffer_charAt = ($this, var$1) => {
    return jl_AbstractStringBuilder_charAt($this, var$1);
},
jl_StringBuffer_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuffer_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert0 = ($this, var$1, var$2) => {
    return $this.$insert9(var$1, var$2);
};
function cwtd_App$renderTimerFunctional$lambda$_4_1() {
    jl_Object.call(this);
    this.$_016 = null;
}
let cwtd_App$renderTimerFunctional$lambda$_4_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_016 = var$1;
},
cwtd_App$renderTimerFunctional$lambda$_4_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderTimerFunctional$lambda$_4_1();
    cwtd_App$renderTimerFunctional$lambda$_4_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderTimerFunctional$lambda$_4_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTimerFunctional$13(var$0.$_016, var$1);
},
cwtd_App$renderTimerFunctional$lambda$_4_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderTimerFunctional$lambda$_4_2() {
    let a = this; jl_Object.call(a);
    a.$_026 = null;
    a.$_13 = null;
}
let cwtd_App$renderTimerFunctional$lambda$_4_2__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_026 = var$1;
    var$0.$_13 = var$2;
},
cwtd_App$renderTimerFunctional$lambda$_4_2__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderTimerFunctional$lambda$_4_2();
    cwtd_App$renderTimerFunctional$lambda$_4_2__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderTimerFunctional$lambda$_4_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTimerFunctional$14(var$0.$_026, var$0.$_13, var$1);
},
cwtd_App$renderTimerFunctional$lambda$_4_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$08 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$08 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierPart($ch);
},
jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields(),
jur_AbstractCharClass$PredefinedCharacterClasses_space = null,
jur_AbstractCharClass$PredefinedCharacterClasses_digit = null,
jur_AbstractCharClass$PredefinedCharacterClasses_contents = null,
jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = () => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = $rt_eraseClinit(jur_AbstractCharClass$PredefinedCharacterClasses);
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_ = $this => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
    jl_Object__init_($this);
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$PredefinedCharacterClasses();
    jur_AbstractCharClass$PredefinedCharacterClasses__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$PredefinedCharacterClasses_getObject = ($this, $name) => {
    let $i, $row, var$4;
    $i = 0;
    while (true) {
        jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
        if ($i >= jur_AbstractCharClass$PredefinedCharacterClasses_contents.data.length)
            $rt_throw(ju_MissingResourceException__init_0($rt_s(9), $rt_s(9), $name));
        $row = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data[$i];
        var$4 = $row.data;
        if ($name.$equals(var$4[0]))
            break;
        $i = $i + 1 | 0;
    }
    return var$4[1];
},
jur_AbstractCharClass$PredefinedCharacterClasses__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_0();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_0();
    var$1 = $rt_createArray($rt_arraycls(jl_Object), 194);
    var$2 = var$1.data;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(10);
    var$4[1] = jur_AbstractCharClass$LazyLower__init_0();
    var$2[0] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(11);
    var$4[1] = jur_AbstractCharClass$LazyUpper__init_0();
    var$2[1] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(12);
    var$4[1] = jur_AbstractCharClass$LazyASCII__init_0();
    var$2[2] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(13);
    var$4[1] = jur_AbstractCharClass$LazyAlpha__init_0();
    var$2[3] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(14);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[4] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(15);
    var$4[1] = jur_AbstractCharClass$LazyAlnum__init_0();
    var$2[5] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(16);
    var$4[1] = jur_AbstractCharClass$LazyPunct__init_0();
    var$2[6] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(17);
    var$4[1] = jur_AbstractCharClass$LazyGraph__init_0();
    var$2[7] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(18);
    var$4[1] = jur_AbstractCharClass$LazyPrint__init_0();
    var$2[8] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(19);
    var$4[1] = jur_AbstractCharClass$LazyBlank__init_0();
    var$2[9] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(20);
    var$4[1] = jur_AbstractCharClass$LazyCntrl__init_0();
    var$2[10] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(21);
    var$4[1] = jur_AbstractCharClass$LazyXDigit__init_0();
    var$2[11] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(22);
    var$4[1] = jur_AbstractCharClass$LazyJavaLowerCase__init_0();
    var$2[12] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(23);
    var$4[1] = jur_AbstractCharClass$LazyJavaUpperCase__init_0();
    var$2[13] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(24);
    var$4[1] = jur_AbstractCharClass$LazyJavaWhitespace__init_0();
    var$2[14] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(25);
    var$4[1] = jur_AbstractCharClass$LazyJavaMirrored__init_0();
    var$2[15] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(26);
    var$4[1] = jur_AbstractCharClass$LazyJavaDefined__init_0();
    var$2[16] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(27);
    var$4[1] = jur_AbstractCharClass$LazyJavaDigit__init_0();
    var$2[17] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(28);
    var$4[1] = jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0();
    var$2[18] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(29);
    var$4[1] = jur_AbstractCharClass$LazyJavaISOControl__init_0();
    var$2[19] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(30);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0();
    var$2[20] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(31);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0();
    var$2[21] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(32);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetter__init_0();
    var$2[22] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(33);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0();
    var$2[23] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(34);
    var$4[1] = jur_AbstractCharClass$LazyJavaSpaceChar__init_0();
    var$2[24] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(35);
    var$4[1] = jur_AbstractCharClass$LazyJavaTitleCase__init_0();
    var$2[25] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(36);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0();
    var$2[26] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(37);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0();
    var$2[27] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(38);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[28] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(39);
    var$4[1] = jur_AbstractCharClass$LazyWord__init_0();
    var$2[29] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(40);
    var$4[1] = jur_AbstractCharClass$LazyNonWord__init_0();
    var$2[30] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(41);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[31] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(42);
    var$4[1] = jur_AbstractCharClass$LazyNonSpace__init_0();
    var$2[32] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(43);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[33] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(44);
    var$4[1] = jur_AbstractCharClass$LazyNonDigit__init_0();
    var$2[34] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(45);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 127);
    var$2[35] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(46);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(128, 255);
    var$2[36] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(47);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(256, 383);
    var$2[37] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(48);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(384, 591);
    var$2[38] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(49);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(592, 687);
    var$2[39] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(50);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(688, 767);
    var$2[40] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(51);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(768, 879);
    var$2[41] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(52);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(880, 1023);
    var$2[42] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(53);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1024, 1279);
    var$2[43] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(54);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1280, 1327);
    var$2[44] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(55);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1328, 1423);
    var$2[45] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(56);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1424, 1535);
    var$2[46] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(57);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1536, 1791);
    var$2[47] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(58);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1792, 1871);
    var$2[48] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(59);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1872, 1919);
    var$2[49] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(60);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1920, 1983);
    var$2[50] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(61);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2304, 2431);
    var$2[51] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(62);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2432, 2559);
    var$2[52] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(63);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2560, 2687);
    var$2[53] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(64);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2688, 2815);
    var$2[54] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(65);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2816, 2943);
    var$2[55] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(66);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2944, 3071);
    var$2[56] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(67);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3072, 3199);
    var$2[57] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(68);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3200, 3327);
    var$2[58] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(69);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3328, 3455);
    var$2[59] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(70);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3456, 3583);
    var$2[60] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(71);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3584, 3711);
    var$2[61] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(72);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3712, 3839);
    var$2[62] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(73);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3840, 4095);
    var$2[63] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(74);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4096, 4255);
    var$2[64] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(75);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4256, 4351);
    var$2[65] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(76);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4352, 4607);
    var$2[66] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(77);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4608, 4991);
    var$2[67] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(78);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4992, 5023);
    var$2[68] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(79);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5024, 5119);
    var$2[69] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(80);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5120, 5759);
    var$2[70] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(81);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5760, 5791);
    var$2[71] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(82);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5792, 5887);
    var$2[72] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(83);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5888, 5919);
    var$2[73] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(84);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5920, 5951);
    var$2[74] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(85);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5952, 5983);
    var$2[75] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(86);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5984, 6015);
    var$2[76] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(87);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6016, 6143);
    var$2[77] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(88);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6144, 6319);
    var$2[78] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(89);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6400, 6479);
    var$2[79] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(90);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6480, 6527);
    var$2[80] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(91);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6528, 6623);
    var$2[81] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(92);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6624, 6655);
    var$2[82] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(93);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6656, 6687);
    var$2[83] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(94);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7424, 7551);
    var$2[84] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(95);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7552, 7615);
    var$2[85] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(96);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7616, 7679);
    var$2[86] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(97);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7680, 7935);
    var$2[87] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(98);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7936, 8191);
    var$2[88] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(99);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8192, 8303);
    var$2[89] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(100);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8304, 8351);
    var$2[90] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(101);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8352, 8399);
    var$2[91] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(102);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8400, 8447);
    var$2[92] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(103);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8448, 8527);
    var$2[93] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(104);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8528, 8591);
    var$2[94] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(105);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8592, 8703);
    var$2[95] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(106);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8704, 8959);
    var$2[96] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(107);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8960, 9215);
    var$2[97] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(108);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9216, 9279);
    var$2[98] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(109);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9280, 9311);
    var$2[99] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(110);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9312, 9471);
    var$2[100] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(111);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9472, 9599);
    var$2[101] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(112);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9600, 9631);
    var$2[102] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(113);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9632, 9727);
    var$2[103] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(114);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9728, 9983);
    var$2[104] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(115);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9984, 10175);
    var$2[105] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(116);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10176, 10223);
    var$2[106] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(117);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10224, 10239);
    var$2[107] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(118);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10240, 10495);
    var$2[108] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(119);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10496, 10623);
    var$2[109] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(120);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10624, 10751);
    var$2[110] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(121);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10752, 11007);
    var$2[111] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(122);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11008, 11263);
    var$2[112] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(123);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11264, 11359);
    var$2[113] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(124);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11392, 11519);
    var$2[114] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(125);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11520, 11567);
    var$2[115] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(126);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11568, 11647);
    var$2[116] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(127);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11648, 11743);
    var$2[117] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(128);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11776, 11903);
    var$2[118] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(129);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11904, 12031);
    var$2[119] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(130);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12032, 12255);
    var$2[120] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(131);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12272, 12287);
    var$2[121] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(132);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12288, 12351);
    var$2[122] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(133);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12352, 12447);
    var$2[123] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(134);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12448, 12543);
    var$2[124] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(135);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12544, 12591);
    var$2[125] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(136);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12592, 12687);
    var$2[126] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(137);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12688, 12703);
    var$2[127] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(138);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12704, 12735);
    var$2[128] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(139);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12736, 12783);
    var$2[129] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(140);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12784, 12799);
    var$2[130] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(141);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12800, 13055);
    var$2[131] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(142);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13056, 13311);
    var$2[132] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(143);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13312, 19893);
    var$2[133] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(144);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19904, 19967);
    var$2[134] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(145);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19968, 40959);
    var$2[135] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(146);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(40960, 42127);
    var$2[136] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(147);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42128, 42191);
    var$2[137] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(148);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42752, 42783);
    var$2[138] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(149);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(43008, 43055);
    var$2[139] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(150);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(44032, 55203);
    var$2[140] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(151);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(55296, 56191);
    var$2[141] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(152);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56192, 56319);
    var$2[142] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(153);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56320, 57343);
    var$2[143] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(154);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(57344, 63743);
    var$2[144] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(155);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(63744, 64255);
    var$2[145] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(156);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64256, 64335);
    var$2[146] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(157);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64336, 65023);
    var$2[147] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(158);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65024, 65039);
    var$2[148] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(159);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65040, 65055);
    var$2[149] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(160);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65056, 65071);
    var$2[150] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(161);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65072, 65103);
    var$2[151] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(162);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65104, 65135);
    var$2[152] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(163);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65136, 65279);
    var$2[153] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(164);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65280, 65519);
    var$2[154] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(165);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 1114111);
    var$2[155] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(166);
    var$4[1] = jur_AbstractCharClass$LazySpecialsBlock__init_0();
    var$2[156] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(167);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(0, 1);
    var$2[157] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(168);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(62, 1);
    var$2[158] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(169);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(1, 1);
    var$2[159] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(170);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(2, 1);
    var$2[160] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(171);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(3, 0);
    var$2[161] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(172);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(4, 0);
    var$2[162] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(173);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(5, 1);
    var$2[163] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(174);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(448, 1);
    var$2[164] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(175);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(6, 1);
    var$2[165] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(176);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(7, 0);
    var$2[166] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(177);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(8, 1);
    var$2[167] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(178);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1);
    var$2[168] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(179);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(9, 1);
    var$2[169] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(180);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(10, 1);
    var$2[170] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(181);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(11, 1);
    var$2[171] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(182);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0);
    var$2[172] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(183);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(12, 0);
    var$2[173] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(184);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(13, 0);
    var$2[174] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(185);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(14, 0);
    var$2[175] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(186);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_2(983040, 1, 1);
    var$2[176] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(187);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(15, 0);
    var$2[177] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(188);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(16, 1);
    var$2[178] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(189);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(18, 1);
    var$2[179] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(190);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_2(19, 0, 1);
    var$2[180] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(191);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1);
    var$2[181] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(192);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(20, 0);
    var$2[182] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(193);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(21, 0);
    var$2[183] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(194);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(22, 0);
    var$2[184] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(195);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(23, 0);
    var$2[185] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(196);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(24, 1);
    var$2[186] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(197);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(2113929216, 1);
    var$2[187] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(198);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(25, 1);
    var$2[188] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(199);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(26, 0);
    var$2[189] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(200);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(27, 0);
    var$2[190] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(201);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(28, 1);
    var$2[191] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(202);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(29, 0);
    var$2[192] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(203);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(30, 0);
    var$2[193] = var$3;
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = var$1;
},
cwth_EffectCallback = $rt_classWithoutFields(0);
function cwtd_App$renderTimerFunctional$lambda$_4_0() {
    let a = this; jl_Object.call(a);
    a.$_011 = null;
    a.$_10 = null;
}
let cwtd_App$renderTimerFunctional$lambda$_4_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_011 = var$1;
    var$0.$_10 = var$2;
},
cwtd_App$renderTimerFunctional$lambda$_4_0__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderTimerFunctional$lambda$_4_0();
    cwtd_App$renderTimerFunctional$lambda$_4_0__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderTimerFunctional$lambda$_4_0_run = var$0 => {
    return cwtd_App_lambda$renderTimerFunctional$12(var$0.$_011, var$0.$_10);
},
cwtd_App$renderTimerFunctional$lambda$_4_0_run$exported$0 = var$1 => {
    return otji_JS_function(var$1.$run(), "call");
},
jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetter__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetter_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetter$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_DecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF160 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
let jur_DecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
},
jur_DecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $decCodePoint, $readCodePoints, $rightBound, $curChar, var$8, $decCurCodePoint, var$10, var$11, var$12, var$13, var$14, var$15;
    $decCodePoint = $rt_createIntArray(4);
    $readCodePoints = 0;
    $rightBound = $matchResult.$getRightBound();
    if ($strIndex >= $rightBound)
        return (-1);
    $curChar = $this.$codePointAt($strIndex, $testString, $rightBound);
    var$8 = $strIndex + $this.$readCharsForCodePoint | 0;
    $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
    if ($decCurCodePoint === null) {
        var$10 = $decCodePoint.data;
        var$11 = 1;
        var$10[$readCodePoints] = $curChar;
    } else {
        var$11 = $decCurCodePoint.data.length;
        jl_System_fastArraycopy($decCurCodePoint, 0, $decCodePoint, 0, var$11);
        var$11 = $readCodePoints + var$11 | 0;
    }
    a: {
        if (var$8 < $rightBound) {
            var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
            while (var$11 < 4) {
                if (!jur_Lexer_hasDecompositionNonNullCanClass(var$12)) {
                    var$10 = $decCodePoint.data;
                    var$13 = var$11 + 1 | 0;
                    var$10[var$11] = var$12;
                } else {
                    var$10 = (jur_Lexer_getDecomposition(var$12)).data;
                    if (var$10.length != 2) {
                        var$14 = $decCodePoint.data;
                        var$13 = var$11 + 1 | 0;
                        var$14[var$11] = var$10[0];
                    } else {
                        var$14 = $decCodePoint.data;
                        var$12 = var$11 + 1 | 0;
                        var$14[var$11] = var$10[0];
                        var$13 = var$12 + 1 | 0;
                        var$14[var$12] = var$10[1];
                    }
                }
                var$8 = var$8 + $this.$readCharsForCodePoint | 0;
                if (var$8 >= $rightBound) {
                    var$11 = var$13;
                    break a;
                }
                var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
                var$11 = var$13;
            }
        }
    }
    if (var$11 != $this.$decomposedCharLength0)
        return (-1);
    var$15 = 0;
    while (true) {
        if (var$15 >= var$11)
            return $this.$next1.$matches(var$8, $testString, $matchResult);
        if ($decCodePoint.data[var$15] != $this.$decomposedChar0.data[var$15])
            break;
        var$15 = var$15 + 1 | 0;
    }
    return (-1);
},
jur_DecomposedCharSet_getDecomposedChar = $this => {
    let $strBuff, $i;
    if ($this.$decomposedCharUTF160 === null) {
        $strBuff = jl_StringBuilder__init_();
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            $strBuff.$append3(jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF160 = $strBuff.$toString();
    }
    return $this.$decomposedCharUTF160;
},
jur_DecomposedCharSet_codePointAt = ($this, $strIndex, $testString, $rightBound) => {
    let $curChar, var$5, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = $testString.$charAt($strIndex);
    else {
        var$5 = $strIndex + 1 | 0;
        $curChar = $testString.$charAt($strIndex);
        $low = $testString.$charAt(var$5);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArrayFromData([$curChar, $low]);
            $curChar = jl_Character_codePointAt($curCodePointUTF16, 0);
            $this.$readCharsForCodePoint = 2;
        }
    }
    return $curChar;
},
jur_DecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        if ($set instanceof jur_DecomposedCharSet) {
            var$2 = $set;
            if (!(jur_DecomposedCharSet_getDecomposedChar(var$2)).$equals(jur_DecomposedCharSet_getDecomposedChar($this))) {
                var$3 = 0;
                break a;
            }
        }
        var$3 = 1;
    }
    return var$3;
},
jur_DecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_CIDecomposedCharSet__init_ = ($this, $decomp, $decomposedCharLength) => {
    jur_DecomposedCharSet__init_($this, $decomp, $decomposedCharLength);
},
jur_CIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIDecomposedCharSet();
    jur_CIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AheadFSet = $rt_classWithoutFields(jur_FSet),
jur_AheadFSet__init_ = $this => {
    jur_FSet__init_($this, (-1));
},
jur_AheadFSet__init_0 = () => {
    let var_0 = new jur_AheadFSet();
    jur_AheadFSet__init_(var_0);
    return var_0;
},
jur_AheadFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyASCII__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyASCII__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyASCII_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(0, 127);
};
function cwtd_App$renderCounterBuilder$lambda$_12_0() {
    jl_Object.call(this);
    this.$_019 = null;
}
let cwtd_App$renderCounterBuilder$lambda$_12_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_019 = var$1;
},
cwtd_App$renderCounterBuilder$lambda$_12_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterBuilder$lambda$_12_0();
    cwtd_App$renderCounterBuilder$lambda$_12_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterBuilder$lambda$_12_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterBuilder$28(var$0.$_019, var$1);
},
cwtd_App$renderCounterBuilder$lambda$_12_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
cwth_StateHandle$IntUpdater = $rt_classWithoutFields(0),
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0();
    cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderUseMemoDemo$39(var$1);
},
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet),
jur_NonCapJointSet__init_ = ($this, $children, $fSet) => {
    jur_JointSet__init_0($this, $children, $fSet);
},
jur_NonCapJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NonCapJointSet();
    jur_NonCapJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NonCapJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size) {
            $matchResult.$setConsumed($this.$groupIndex, $start);
            return (-1);
        }
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_NonCapJointSet_hasConsumed = ($this, $matchResult) => {
    let $cons;
    $cons = $matchResult.$getConsumed($this.$groupIndex);
    return !$cons ? 0 : 1;
},
jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet),
jur_AtomicJointSet__init_ = ($this, $children, $fSet) => {
    jur_NonCapJointSet__init_($this, $children, $fSet);
},
jur_AtomicJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AtomicJointSet();
    jur_AtomicJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AtomicJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next1.$matches($this.$fSet.$getIndex(), $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    $matchResult.$setConsumed($this.$groupIndex, $start);
    return (-1);
},
jur_AtomicJointSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookAhead();
    jur_PositiveLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PositiveLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0();
    cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderTimerFunctional$9(var$1);
},
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
};
function cwtd_App$renderCounterBuilder$lambda$_12_2() {
    jl_Object.call(this);
    this.$_046 = null;
}
let cwtd_App$renderCounterBuilder$lambda$_12_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_046 = var$1;
},
cwtd_App$renderCounterBuilder$lambda$_12_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterBuilder$lambda$_12_2();
    cwtd_App$renderCounterBuilder$lambda$_12_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterBuilder$lambda$_12_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterBuilder$31(var$0.$_046, var$1);
},
cwtd_App$renderCounterBuilder$lambda$_12_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookAhead();
    jur_NegativeLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e;
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        if ($e.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function cwtd_App$renderCounterBuilder$lambda$_12_1() {
    jl_Object.call(this);
    this.$_04 = null;
}
let cwtd_App$renderCounterBuilder$lambda$_12_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_04 = var$1;
},
cwtd_App$renderCounterBuilder$lambda$_12_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterBuilder$lambda$_12_1();
    cwtd_App$renderCounterBuilder$lambda$_12_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterBuilder$lambda$_12_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterBuilder$30(var$0.$_04, var$1);
},
cwtd_App$renderCounterBuilder$lambda$_12_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0();
    cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderUseMemoDemo$43(var$1);
},
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
ju_Iterator = $rt_classWithoutFields(0);
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index0 = 0;
    a.$modCount0 = 0;
    a.$size1 = 0;
    a.$removeIndex = 0;
    a.$this$0 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    jl_Object__init_($this);
    $this.$modCount0 = $this.$this$0.$modCount;
    $this.$size1 = $this.$this$0.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index0 >= $this.$size1 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index0;
    var$1 = $this.$this$0;
    var$2 = $this.$index0;
    $this.$index0 = var$2 + 1 | 0;
    return var$1.$get(var$2);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount0 >= $this.$this$0.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_0());
},
jl_Cloneable = $rt_classWithoutFields(0);
function jur_Quantifier() {
    let a = this; jur_SpecialToken.call(a);
    a.$min1 = 0;
    a.$max1 = 0;
}
let jur_Quantifier__init_ = ($this, $min, $max) => {
    jur_SpecialToken__init_($this);
    $this.$min1 = $min;
    $this.$max1 = $max;
},
jur_Quantifier__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Quantifier();
    jur_Quantifier__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Quantifier_min = $this => {
    return $this.$min1;
},
jur_Quantifier_max = $this => {
    return $this.$max1;
},
jur_Quantifier_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$min1;
    var$2 = $this.$max1 == 2147483647 ? $rt_s(9) : jl_Integer_toString($this.$max1);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append1(var$3, 123), var$1), 44), var$2), 125);
    return jl_StringBuilder_toString(var$3);
};
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$09 = null;
}
let jur_AbstractCharClass$LazyJavaUpperCase$1__init_ = ($this, $this$0) => {
    $this.$this$09 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUpperCase$1();
    jur_AbstractCharClass$LazyJavaUpperCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUpperCase$1_contains = ($this, $ch) => {
    return jl_Character_isUpperCase($ch);
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = var$1 => {
    if (var$1 === null || var$1.constructor.$meta.item === 'undefined') {
        $rt_throw(jl_IllegalArgumentException__init_());
    }
    return var$1.data.length;
},
jlr_Array_newInstance = (var$1, $length) => {
    if (var$1 === null)
        $rt_throw(jl_NullPointerException__init_2());
    if (var$1 === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    return jlr_Array_newInstanceImpl(jl_Class_getPlatformClass(var$1), $length);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
cwth_Html = $rt_classWithoutFields(),
cwth_Html_toJSArray = var$1 => {
    let var$2, $i, var$4;
    var$2 = cwtc_React_createArray$js_body$_27();
    $i = 0;
    while (true) {
        var$4 = var$1.data;
        if ($i >= var$4.length)
            break;
        var$2.push(otji_JSWrapper_unwrap(var$4[$i]));
        $i = $i + 1 | 0;
    }
    return var$2;
},
cwth_Html_div = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("div", null, cwth_Html_toJSArray($children));
},
cwth_Html_span = $text => {
    return React.createElement("span", null, $rt_ustr($text));
},
cwth_Html_section = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("section", null, cwth_Html_toJSArray($children));
},
cwth_Html_article = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("article", null, cwth_Html_toJSArray($children));
},
cwth_Html_header = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("header", null, cwth_Html_toJSArray($children));
},
cwth_Html_footer = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("footer", null, cwth_Html_toJSArray($children));
},
cwth_Html_nav = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("nav", null, cwth_Html_toJSArray($children));
},
cwth_Html_h1 = $text => {
    return React.createElement("h1", null, $rt_ustr($text));
},
cwth_Html_h2 = $text => {
    return React.createElement("h2", null, $rt_ustr($text));
},
cwth_Html_h3 = $text => {
    return React.createElement("h3", null, $rt_ustr($text));
},
cwth_Html_h4 = $text => {
    return React.createElement("h4", null, $rt_ustr($text));
},
cwth_Html_h5 = $text => {
    return React.createElement("h5", null, $rt_ustr($text));
},
cwth_Html_h6 = $text => {
    return React.createElement("h6", null, $rt_ustr($text));
},
cwth_Html_p = $text => {
    return React.createElement("p", null, $rt_ustr($text));
},
cwth_Html_p0 = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("p", null, cwth_Html_toJSArray($children));
},
cwth_Html_pre = $text => {
    return React.createElement("pre", null, $rt_ustr($text));
},
cwth_Html_code = $text => {
    return React.createElement("code", null, $rt_ustr($text));
},
cwth_Html_blockquote = $text => {
    return React.createElement("blockquote", null, $rt_ustr($text));
},
cwth_Html_em = $text => {
    return React.createElement("em", null, $rt_ustr($text));
},
cwth_Html_strong = $text => {
    return React.createElement("strong", null, $rt_ustr($text));
},
cwth_Html_small = $text => {
    return React.createElement("small", null, $rt_ustr($text));
},
cwth_Html_mark = $text => {
    return React.createElement("mark", null, $rt_ustr($text));
},
cwth_Html_ul = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("ul", null, cwth_Html_toJSArray($children));
},
cwth_Html_ol = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("ol", null, cwth_Html_toJSArray($children));
},
cwth_Html_li = $text => {
    return React.createElement("li", null, $rt_ustr($text));
},
cwth_Html_li0 = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("li", null, cwth_Html_toJSArray($children));
},
cwth_Html_dl = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("dl", null, cwth_Html_toJSArray($children));
},
cwth_Html_dt = $text => {
    return React.createElement("dt", null, $rt_ustr($text));
},
cwth_Html_dd = $text => {
    return React.createElement("dd", null, $rt_ustr($text));
},
cwth_Html_table = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("table", null, cwth_Html_toJSArray($children));
},
cwth_Html_thead = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("thead", null, cwth_Html_toJSArray($children));
},
cwth_Html_tbody = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("tbody", null, cwth_Html_toJSArray($children));
},
cwth_Html_tr = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("tr", null, cwth_Html_toJSArray($children));
},
cwth_Html_th = $text => {
    return React.createElement("th", null, $rt_ustr($text));
},
cwth_Html_td = $text => {
    return React.createElement("td", null, $rt_ustr($text));
},
cwth_Html_hr = () => {
    return React.createElement("hr", null);
},
cwth_Html_details = $children => {
    return cwtc_React_createElementFromArray$js_body$_29("details", null, cwth_Html_toJSArray($children));
},
cwth_Html_summary = $text => {
    return React.createElement("summary", null, $rt_ustr($text));
},
cwth_Html_button = $text => {
    return cwth_ElementBuilder__init_($rt_s(204), $text);
},
cwth_Html_input = $type => {
    return cwth_ElementBuilder_type(cwth_ElementBuilder__init_($rt_s(205), null), $type);
},
cwth_Html_textarea = () => {
    return cwth_ElementBuilder__init_($rt_s(206), null);
};
let cwth_Html_component = ($fn, $displayName) => {
    return React.createElement(cwtc_React_wrapComponent$js_body$_8(otji_JS_function($fn, "render"), $rt_ustr($displayName)), null);
},
cwth_Html_fragment = $children => {
    return cwtc_React_createElementFromArray$js_body$_30(React.Fragment, null, cwth_Html_toJSArray($children));
};
function cwtd_App$renderFormBuilder$lambda$_14_3() {
    jl_Object.call(this);
    this.$_014 = null;
}
let cwtd_App$renderFormBuilder$lambda$_14_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_014 = var$1;
},
cwtd_App$renderFormBuilder$lambda$_14_3__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderFormBuilder$lambda$_14_3();
    cwtd_App$renderFormBuilder$lambda$_14_3__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderFormBuilder$lambda$_14_3_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderFormBuilder$37(var$0.$_014, var$1);
},
cwtd_App$renderFormBuilder$lambda$_14_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderFormBuilder$lambda$_14_4() {
    jl_Object.call(this);
    this.$_0 = null;
}
let cwtd_App$renderFormBuilder$lambda$_14_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
},
cwtd_App$renderFormBuilder$lambda$_14_4__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderFormBuilder$lambda$_14_4();
    cwtd_App$renderFormBuilder$lambda$_14_4__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderFormBuilder$lambda$_14_4_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderFormBuilder$33(var$0.$_0, var$1);
},
cwtd_App$renderFormBuilder$lambda$_14_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwth_StateHandle() {
    jl_Object.call(this);
    this.$hookResult = null;
}
let cwth_StateHandle__init_0 = ($this, $hookResult) => {
    jl_Object__init_($this);
    $this.$hookResult = $hookResult;
},
cwth_StateHandle__init_ = var_0 => {
    let var_1 = new cwth_StateHandle();
    cwth_StateHandle__init_0(var_1, var_0);
    return var_1;
},
cwth_StateHandle_getString = $this => {
    return $rt_str('' + otji_JSWrapper_unwrap($this.$hookResult.data[0]));
},
cwth_StateHandle_getInt = $this => {
    return otji_JSWrapper_unwrap($this.$hookResult.data[0]) | 0;
},
cwth_StateHandle_getBool = $this => {
    return !!otji_JSWrapper_unwrap($this.$hookResult.data[0]) ? 1 : 0;
},
cwth_StateHandle_setInt = ($this, $value) => {
    otji_JSWrapper_unwrap($this.$hookResult.data[1])($value);
},
cwth_StateHandle_setString = ($this, $value) => {
    otji_JSWrapper_unwrap($this.$hookResult.data[1])($rt_ustr($value));
},
cwth_StateHandle_setBool = ($this, $value) => {
    otji_JSWrapper_unwrap($this.$hookResult.data[1])(!!$value);
},
cwth_StateHandle_updateInt = ($this, $updater) => {
    cwth_StateHandle_callSetterWithIntUpdater$js_body$_19(otji_JSWrapper_unwrap($this.$hookResult.data[1]), otji_JS_function($updater, "update"));
},
cwth_StateHandle_callSetterWithIntUpdater$js_body$_19 = (var$1, var$2) => {
    var$1(function(prev) {
        return var$2(prev | 0);
    });
};
function cwth_DomBuilder() {
    let a = this; jl_Object.call(a);
    a.$tag = null;
    a.$textContent0 = null;
    a.$props0 = null;
    a.$children0 = null;
}
let cwth_DomBuilder__init_ = ($this, var$1) => {
    jl_Object__init_($this);
    $this.$tag = var$1;
},
cwth_DomBuilder__init_0 = var_0 => {
    let var_1 = new cwth_DomBuilder();
    cwth_DomBuilder__init_(var_1, var_0);
    return var_1;
},
cwth_DomBuilder_ensureProps = $this => {
    if ($this.$props0 === null)
        $this.$props0 = cwtc_React_createObject$js_body$_9();
    return $this.$props0;
},
cwth_DomBuilder_ensureChildren = $this => {
    if ($this.$children0 === null)
        $this.$children0 = ju_ArrayList__init_0();
    return $this.$children0;
},
cwth_DomBuilder_text = ($this, $text) => {
    $this.$textContent0 = $text;
    return $this;
},
cwth_DomBuilder_child0 = ($this, $element) => {
    (cwth_DomBuilder_ensureChildren($this)).$add2(otji_JSWrapper_wrap($element));
    return $this;
},
cwth_DomBuilder_child = ($this, $builder) => {
    (cwth_DomBuilder_ensureChildren($this)).$add2(otji_JSWrapper_wrap($builder.$build()));
    return $this;
},
cwth_DomBuilder_className = ($this, $className) => {
    (cwth_DomBuilder_ensureProps($this))["className"] = $rt_ustr($className);
    return $this;
},
cwth_DomBuilder_id = ($this, $id) => {
    (cwth_DomBuilder_ensureProps($this))["id"] = $rt_ustr($id);
    return $this;
},
cwth_DomBuilder_key = ($this, $key) => {
    (cwth_DomBuilder_ensureProps($this))["key"] = $key;
    return $this;
},
cwth_DomBuilder_style = ($this, $style) => {
    let var$2, var$3;
    var$2 = cwth_DomBuilder_ensureProps($this);
    var$3 = $style.$toJSObject();
    var$2["style"] = var$3;
    return $this;
},
cwth_DomBuilder_onClick = ($this, $handler) => {
    (cwth_DomBuilder_ensureProps($this))['onClick'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_DomBuilder_onChange = ($this, $handler) => {
    (cwth_DomBuilder_ensureProps($this))['onChange'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_DomBuilder_value = ($this, $value) => {
    (cwth_DomBuilder_ensureProps($this))["value"] = $rt_ustr($value);
    return $this;
},
cwth_DomBuilder_placeholder = ($this, $placeholder) => {
    (cwth_DomBuilder_ensureProps($this))["placeholder"] = $rt_ustr($placeholder);
    return $this;
},
cwth_DomBuilder_disabled = ($this, $disabled) => {
    (cwth_DomBuilder_ensureProps($this))["disabled"] = !!$disabled;
    return $this;
},
cwth_DomBuilder_type = ($this, $type) => {
    (cwth_DomBuilder_ensureProps($this))["type"] = $rt_ustr($type);
    return $this;
},
cwth_DomBuilder_prop = ($this, $name, $value) => {
    (cwth_DomBuilder_ensureProps($this))[$rt_ustr($name)] = $rt_ustr($value);
    return $this;
},
cwth_DomBuilder_build = $this => {
    let $jsChildren, $i;
    if ($this.$children0 !== null && !$this.$children0.$isEmpty()) {
        $jsChildren = cwtc_React_createArray$js_body$_27();
        $i = 0;
        while ($i < $this.$children0.$size()) {
            $jsChildren.push(otji_JSWrapper_unwrap($this.$children0.$get($i)));
            $i = $i + 1 | 0;
        }
        return cwtc_React_createElementFromArray$js_body$_29($rt_ustr($this.$tag), $this.$props0, $jsChildren);
    }
    if ($this.$textContent0 === null)
        return React.createElement($rt_ustr($this.$tag), $this.$props0);
    return React.createElement($rt_ustr($this.$tag), $this.$props0, $rt_ustr($this.$textContent0));
},
cwth_DomBuilder$Button = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Button__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(204));
},
cwth_DomBuilder$Button__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Button();
    cwth_DomBuilder$Button__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Button_create = () => {
    return cwth_DomBuilder$Button__init_0();
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
cwth_DomBuilder$Li = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Li__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(207));
},
cwth_DomBuilder$Li__init_ = () => {
    let var_0 = new cwth_DomBuilder$Li();
    cwth_DomBuilder$Li__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$Li_create = () => {
    return cwth_DomBuilder$Li__init_();
},
jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_isEmpty = $this => {
    return $this.$size() ? 0 : 1;
},
ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, var$4, $iter;
    var$2 = $a.data;
    $i = $this.$size();
    var$4 = var$2.length;
    if (var$4 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < var$4) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        var$2 = $a.data;
        var$4 = $i + 1 | 0;
        var$2[$i] = $iter.$next();
        $i = var$4;
    }
    return $a;
};
function cwtd_App$renderFormBuilder$lambda$_14_1() {
    jl_Object.call(this);
    this.$_048 = null;
}
let cwtd_App$renderFormBuilder$lambda$_14_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_048 = var$1;
},
cwtd_App$renderFormBuilder$lambda$_14_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderFormBuilder$lambda$_14_1();
    cwtd_App$renderFormBuilder$lambda$_14_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderFormBuilder$lambda$_14_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderFormBuilder$35(var$0.$_048, var$1);
},
cwtd_App$renderFormBuilder$lambda$_14_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_PossessiveQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveQuantifierSet();
    jur_PossessiveQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(208);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_2($chars);
};
function cwtd_App$renderFormBuilder$lambda$_14_2() {
    jl_Object.call(this);
    this.$_035 = null;
}
let cwtd_App$renderFormBuilder$lambda$_14_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_035 = var$1;
},
cwtd_App$renderFormBuilder$lambda$_14_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderFormBuilder$lambda$_14_2();
    cwtd_App$renderFormBuilder$lambda$_14_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderFormBuilder$lambda$_14_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderFormBuilder$36(var$0.$_035, var$1);
},
cwtd_App$renderFormBuilder$lambda$_14_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cwtd_App$renderFormBuilder$lambda$_14_0() {
    jl_Object.call(this);
    this.$_07 = null;
}
let cwtd_App$renderFormBuilder$lambda$_14_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_07 = var$1;
},
cwtd_App$renderFormBuilder$lambda$_14_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderFormBuilder$lambda$_14_0();
    cwtd_App$renderFormBuilder$lambda$_14_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderFormBuilder$lambda$_14_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderFormBuilder$34(var$0.$_07, var$1);
},
cwtd_App$renderFormBuilder$lambda$_14_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_AltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltQuantifierSet();
    jur_AltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jur_AltQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_PossessiveAltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveAltQuantifierSet();
    jur_PossessiveAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
};
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$029 = null;
}
let jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_ = ($this, $this$0) => {
    $this.$this$029 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains = ($this, $ch) => {
    return jl_Character_isIdentifierIgnorable($ch);
},
otcir_FieldInfo = $rt_classWithoutFields(),
otjc_JSObjects = $rt_classWithoutFields();
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$023 = null;
}
let jur_AbstractCharClass$LazyJavaLetter$1__init_ = ($this, $this$0) => {
    $this.$this$023 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetter$1();
    jur_AbstractCharClass$LazyJavaLetter$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetter$1_contains = ($this, $ch) => {
    return jl_Character_isLetter($ch);
},
jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_ReluctantQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantQuantifierSet();
    jur_ReluctantQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (true) {
        var$4 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
};
function cwtd_App$renderCounterFunctional$lambda$_3_5() {
    jl_Object.call(this);
    this.$_027 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_5__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_027 = var$1;
},
cwtd_App$renderCounterFunctional$lambda$_3_5__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterFunctional$lambda$_3_5();
    cwtd_App$renderCounterFunctional$lambda$_3_5__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterFunctional$lambda$_3_5_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$8(var$0.$_027, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_5_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
otji_JS = $rt_classWithoutFields(),
otji_JS_wrap = $array => {
    let var$2, var$3, $result, $i, var$6;
    if ($array === null)
        return null;
    var$2 = $array.data;
    var$3 = var$2.length;
    $result = new Array(var$3);
    $i = 0;
    while ($i < var$3) {
        var$6 = otji_JSWrapper_unwrap(var$2[$i]);
        $result[$i] = var$6;
        $i = $i + 1 | 0;
    }
    return $result;
},
otji_JS_unwrapArray = ($type, $array) => {
    let $result, $i, var$5;
    if ($array === null)
        return null;
    $result = jlr_Array_newInstance($type, $array.length);
    $i = 0;
    while (true) {
        var$5 = $result.data;
        if ($i >= var$5.length)
            break;
        var$5[$i] = otji_JSWrapper_wrap(otji_JSWrapper_maybeUnwrap($array[$i]));
        $i = $i + 1 | 0;
    }
    return $result;
},
otji_JS_function = (var$1, var$2) => {
    if (var$1 === null || var$1 === undefined) {
        return null;
    }
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
cwtc_React = $rt_classWithoutFields(),
cwtc_React_wrapComponent$js_body$_8 = (var$1, var$2) => {
    var comp = function(props) {
        return var$1(props);
    };
    comp.displayName = var$2;
    return comp;
},
cwtc_React_createObject$js_body$_9 = () => {
    return {  };
},
cwtc_React_createArray$js_body$_27 = () => {
    return [];
},
cwtc_React_createElementFromArray$js_body$_29 = (var$1, var$2, var$3) => {
    return React.createElement.apply(null, [var$1, var$2].concat(var$3));
},
cwtc_React_createElementFromArray$js_body$_30 = (var$1, var$2, var$3) => {
    return React.createElement.apply(null, [var$1, var$2].concat(var$3));
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$033 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_ = ($this, var$1) => {
    $this.$this$033 = var$1;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierStart($ch);
};
function cwtd_App$renderCounterFunctional$lambda$_3_0() {
    let a = this; jl_Object.call(a);
    a.$_047 = null;
    a.$_17 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_047 = var$1;
    var$0.$_17 = var$2;
},
cwtd_App$renderCounterFunctional$lambda$_3_0__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderCounterFunctional$lambda$_3_0();
    cwtd_App$renderCounterFunctional$lambda$_3_0__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderCounterFunctional$lambda$_3_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$2(var$0.$_047, var$0.$_17, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderCounterFunctional$lambda$_3_2() {
    jl_Object.call(this);
    this.$_022 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_022 = var$1;
},
cwtd_App$renderCounterFunctional$lambda$_3_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterFunctional$lambda$_3_2();
    cwtd_App$renderCounterFunctional$lambda$_3_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterFunctional$lambda$_3_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$5(var$0.$_022, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeIntPairsDiff = $text => {
    let $flow, $sz, $data, $j, $lastKey, $lastValue, $i, var$9, var$10;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $j = 0;
    $lastKey = 0;
    $lastValue = 0;
    $i = 0;
    while ($i < $sz) {
        var$9 = $data.data;
        $lastKey = $lastKey + otci_Base46_decode($flow) | 0;
        $lastValue = $lastValue + otci_Base46_decode($flow) | 0;
        var$10 = $j + 1 | 0;
        var$9[$j] = $lastKey;
        $j = var$10 + 1 | 0;
        var$9[var$10] = $lastValue;
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, $last, $i, var$7, var$8;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        var$7 = $data.data;
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$7[var$8] = $last;
        var$7[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, $last, $lastValue, $i, var$6, var$7, $key, $value, var$10;
    $result = $rt_createIntArray(65536);
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$6 = $data.data;
            if ($i >= var$6.length)
                break a;
            var$7 = $result.data;
            $key = var$6[$i];
            $value = var$6[$i + 1 | 0];
            var$10 = var$7.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    return otciu_CharMapping__init_0($data, $result);
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
},
otciu_UnicodeHelper_extractRle = $encoded => {
    let $ranges, $buffer, $index, $rangeIndex, $codePoint, $i, $b, $count, $pos, $j, $digit, var$13, var$14, var$15, var$16, var$17;
    $ranges = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
    $buffer = $rt_createByteArray(16384);
    $index = 0;
    $rangeIndex = 0;
    $codePoint = 0;
    $i = 0;
    while ($i < $encoded.$length()) {
        $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        if ($b == 64) {
            $i = $i + 1 | 0;
            $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
            $count = 0;
            $pos = 1;
            $j = 0;
            while ($j < 3) {
                $i = $i + 1 | 0;
                $digit = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
                $count = $count | $rt_imul($pos, $digit);
                $pos = $pos * 64 | 0;
                $j = $j + 1 | 0;
            }
        } else if ($b < 32)
            $count = 1;
        else {
            $b = ($b - 32 | 0) << 24 >> 24;
            $i = $i + 1 | 0;
            $count = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        }
        if (!$b && $count >= 128) {
            if ($index > 0) {
                var$13 = $ranges.data;
                var$14 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $rangeIndex = var$14;
            }
            $codePoint = $codePoint + ($index + $count | 0) | 0;
            $index = 0;
        } else {
            var$15 = $buffer.data;
            var$14 = $index + $count | 0;
            if (var$14 < var$15.length)
                var$16 = $rangeIndex;
            else {
                var$13 = $ranges.data;
                var$16 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $codePoint = $codePoint + var$14 | 0;
                $index = 0;
            }
            while (true) {
                var$14 = $count + (-1) | 0;
                if ($count <= 0)
                    break;
                var$17 = $index + 1 | 0;
                var$15[$index] = $b;
                $index = var$17;
                $count = var$14;
            }
            $rangeIndex = var$16;
        }
        $i = $i + 1 | 0;
    }
    return ju_Arrays_copyOf0($ranges, $rangeIndex);
};
function cwtd_App$renderCounterFunctional$lambda$_3_1() {
    let a = this; jl_Object.call(a);
    a.$_033 = null;
    a.$_15 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_1__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_033 = var$1;
    var$0.$_15 = var$2;
},
cwtd_App$renderCounterFunctional$lambda$_3_1__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderCounterFunctional$lambda$_3_1();
    cwtd_App$renderCounterFunctional$lambda$_3_1__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderCounterFunctional$lambda$_3_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$4(var$0.$_033, var$0.$_15, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderCounterFunctional$lambda$_3_4() {
    jl_Object.call(this);
    this.$_039 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_4__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_039 = var$1;
},
cwtd_App$renderCounterFunctional$lambda$_3_4__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterFunctional$lambda$_3_4();
    cwtd_App$renderCounterFunctional$lambda$_3_4__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterFunctional$lambda$_3_4_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$7(var$0.$_039, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderCounterFunctional$lambda$_3_3() {
    jl_Object.call(this);
    this.$_013 = null;
}
let cwtd_App$renderCounterFunctional$lambda$_3_3__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_013 = var$1;
},
cwtd_App$renderCounterFunctional$lambda$_3_3__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderCounterFunctional$lambda$_3_3();
    cwtd_App$renderCounterFunctional$lambda$_3_3__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderCounterFunctional$lambda$_3_3_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderCounterFunctional$6(var$0.$_013, var$1);
},
cwtd_App$renderCounterFunctional$lambda$_3_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_requireNonNull0 = $obj => {
    return ju_Objects_requireNonNull($obj, $rt_s(9));
},
ju_Objects_requireNonNull = ($obj, $message) => {
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init_($message));
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
otjc_JSUndefined = $rt_classWithoutFields(),
jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum),
jur_AbstractCharClass$LazyGraph__init_ = $this => {
    jur_AbstractCharClass$LazyAlnum__init_($this);
},
jur_AbstractCharClass$LazyGraph__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyGraph_computeValue = $this => {
    return (((jur_AbstractCharClass$LazyAlnum_computeValue($this)).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph),
jur_AbstractCharClass$LazyPrint__init_ = $this => {
    jur_AbstractCharClass$LazyGraph__init_($this);
},
jur_AbstractCharClass$LazyPrint__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPrint_computeValue = $this => {
    return (jur_AbstractCharClass$LazyGraph_computeValue($this)).$add(32);
},
jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaSpaceChar__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaSpaceChar_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0($this);
},
jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookBehind();
    jur_PositiveLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $leftBound, $shift, $i, $e;
    $size = $this.$children.$size();
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    a: {
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                $e = $this.$children.$get($i);
                if ($e.$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    $matchResult.$setConsumed($this.$groupIndex, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
},
jur_PositiveLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_SequenceSet() {
    let a = this; jur_LeafSet.call(a);
    a.$string = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
let jur_SequenceSet__init_ = ($this, $substring) => {
    let $j;
    jur_LeafSet__init_($this);
    $this.$string = $substring.$toString();
    $this.$charCount0 = $substring.$length();
    $this.$leftToRight = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $this.$rightToLeft = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $j = 0;
    while ($j < ($this.$charCount0 - 1 | 0)) {
        $this.$leftToRight.$put($this.$string.$charAt($j), ($this.$charCount0 - $j | 0) - 1 | 0);
        $this.$rightToLeft.$put($this.$string.$charAt(($this.$charCount0 - $j | 0) - 1 | 0), ($this.$charCount0 - $j | 0) - 1 | 0);
        $j = $j + 1 | 0;
    }
},
jur_SequenceSet__init_0 = var_0 => {
    let var_1 = new jur_SequenceSet();
    jur_SequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_SequenceSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$startsWith($testString, $strIndex) ? (-1) : $this.$charCount0;
},
jur_SequenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $strLength, var$5;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$5 = $this.$indexOf($testString, $strIndex, $strLength);
        if (var$5 < 0)
            return (-1);
        if ($this.$next1.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = var$5 + 1 | 0;
    }
    return var$5;
},
jur_SequenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let var$5;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$5 = $this.$lastIndexOf($testString, $strIndex, $lastIndex);
        if (var$5 < 0)
            return (-1);
        if ($this.$next1.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = var$5 + (-1) | 0;
    }
    return var$5;
},
jur_SequenceSet_first = ($this, $set) => {
    let var$2, var$3, var$4, var$5, var$6;
    if ($set instanceof jur_CharSet)
        return $set.$getChar() != $this.$string.$charAt(0) ? 0 : 1;
    if ($set instanceof jur_RangeSet)
        return $set.$accepts(0, $this.$string.$substring(0, 1)) <= 0 ? 0 : 1;
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        a: {
            if ($this.$string.$length() > 1) {
                var$2 = $set;
                var$3 = var$2.$getCodePoint();
                var$4 = $this.$string.$charAt(0);
                var$2 = $this.$string;
                var$5 = var$2.$charAt(1);
                if (var$3 == jl_Character_toCodePoint(var$4, var$5)) {
                    var$4 = 1;
                    break a;
                }
            }
            var$4 = 0;
        }
        return var$4;
    }
    b: {
        c: {
            var$2 = $set;
            if (!var$2.$contains($this.$string.$charAt(0))) {
                var$6 = $this.$string;
                if (var$6.$length() <= 1)
                    break c;
                var$6 = $this.$string;
                var$4 = jl_Character_toCodePoint(var$6.$charAt(0), $this.$string.$charAt(1));
                if (!var$2.$contains(var$4))
                    break c;
            }
            var$4 = 1;
            break b;
        }
        var$4 = 0;
    }
    return var$4;
},
jur_SequenceSet_indexOf = ($this, $str, $i, $to) => {
    let $last, $ch;
    $last = $this.$string.$charAt($this.$charCount0 - 1 | 0);
    while (true) {
        if ($i > ($to - $this.$charCount0 | 0))
            return (-1);
        $ch = $str.$charAt(($i + $this.$charCount0 | 0) - 1 | 0);
        if ($ch == $last && $this.$startsWith($str, $i))
            break;
        $i = $i + $this.$leftToRight.$get1($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_lastIndexOf = ($this, $str, $to, $i) => {
    let $first, $size, $delta, $ch;
    $first = $this.$string.$charAt(0);
    $size = $str.$length();
    $delta = ($size - $i | 0) - $this.$charCount0 | 0;
    if ($delta <= 0)
        $i = $i + $delta | 0;
    while (true) {
        if ($i < $to)
            return (-1);
        $ch = $str.$charAt($i);
        if ($ch == $first && $this.$startsWith($str, $i))
            break;
        $i = $i - $this.$rightToLeft.$get1($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_startsWith = ($this, $str, $from) => {
    let $i;
    $i = 0;
    while ($i < $this.$charCount0) {
        if ($str.$charAt($i + $from | 0) != $this.$string.$charAt($i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
};
function cwtd_App$StopwatchView() {
    let a = this; cwtc_ReactView.call(a);
    a.$ms = null;
    a.$running = null;
    a.$intervalId = 0;
}
let cwtd_App$StopwatchView__init_ = $this => {
    cwtc_ReactView__init_($this);
    $this.$ms = cwth_Hooks_useState0(0);
    $this.$running = cwth_Hooks_useState1(0);
    $this.$intervalId = (-1);
},
cwtd_App$StopwatchView__init_0 = () => {
    let var_0 = new cwtd_App$StopwatchView();
    cwtd_App$StopwatchView__init_(var_0);
    return var_0;
},
cwtd_App$StopwatchView_onMount = $this => {
    return;
},
cwtd_App$StopwatchView_onUnmount = $this => {
    if ($this.$intervalId >= 0)
        clearInterval($this.$intervalId);
},
cwtd_App$StopwatchView_render = $this => {
    let $totalMs, $secs, $tenths, var$4, var$5, var$6, var$7;
    cwth_Hooks_useEffect(otji_JSWrapper_unwrap(cwtd_App$StopwatchView$render$lambda$_3_0__init_0($this)));
    $totalMs = $this.$ms.$getInt();
    $secs = $totalMs / 1000 | 0;
    $tenths = ($totalMs % 1000 | 0) / 100 | 0;
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(209)));
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$6, $secs), 46), $tenths), 115);
    var$6 = jl_StringBuilder_toString(var$6);
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_p(var$6));
    var$6 = cwth_Html_button(!$this.$running.$getBool() ? $rt_s(210) : $rt_s(211));
    var$7 = cwtd_App$StopwatchView$render$lambda$_3_1__init_0($this);
    var$6 = cwth_ElementBuilder_onClick(var$6, otji_JSWrapper_unwrap(var$7));
    var$6 = cwth_ElementBuilder_className(var$6, !$this.$running.$getBool() ? $rt_s(212) : $rt_s(213));
    var$5[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$6));
    var$7 = cwth_Html_button($rt_s(214));
    var$6 = cwtd_App$StopwatchView$render$lambda$_3_2__init_0($this);
    var$6 = cwth_ElementBuilder_onClick(var$7, otji_JSWrapper_unwrap(var$6));
    var$5[3] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$6));
    return cwth_Html_div(var$4);
},
cwtd_App$StopwatchView_lambda$render$5 = ($this, $e) => {
    $this.$ms.$setInt(0);
    $this.$running.$setBool(0);
},
cwtd_App$StopwatchView_lambda$render$4 = ($this, $e) => {
    $this.$running.$setBool($this.$running.$getBool() ? 0 : 1);
},
cwtd_App$StopwatchView_lambda$render$3 = $this => {
    let $id;
    if (!$this.$running.$getBool())
        return null;
    $id = setInterval(otji_JS_function(otji_JSWrapper_unwrap(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0__init_0($this)), "call"), 100);
    return otji_JSWrapper_unwrap(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1__init_0($id));
},
cwtd_App$StopwatchView_lambda$render$2 = $id => {
    clearInterval($id);
},
cwtd_App$StopwatchView_lambda$render$1 = $this => {
    $this.$ms.$updateInt(otji_JSWrapper_unwrap(cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0__init_0()));
},
cwtd_App$StopwatchView_lambda$render$0 = $t => {
    return $t + 100 | 0;
};
function cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0() {
    jl_Object.call(this);
    this.$_08 = null;
}
let cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_08 = var$1;
},
cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0();
    cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderCounterFunctional$1(var$0.$_08, var$1);
},
cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jur_EOISet = $rt_classWithoutFields(jur_AbstractSet),
jur_EOISet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_EOISet__init_0 = () => {
    let var_0 = new jur_EOISet();
    jur_EOISet__init_(var_0);
    return var_0;
},
jur_EOISet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getRightBound() : $testString.$length();
    if ($stringIndex < $rightBound)
        return (-1);
    $matchResult.$hitEnd = 1;
    $matchResult.$requireEnd = 1;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_EOISet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0();
    cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderCounterBuilder$27(var$1);
},
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_ArrayStoreException__init_ = () => {
    let var_0 = new jl_ArrayStoreException();
    jl_ArrayStoreException__init_0(var_0);
    return var_0;
},
ju_SequencedCollection = $rt_classWithoutFields(0),
jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_AltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltGroupQuantifierSet();
    jur_AltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyUpper__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyUpper__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyUpper_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(65, 90);
},
jur_MatchResult = $rt_classWithoutFields(0);
function jur_MatchResultImpl() {
    let a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string3 = null;
    a.$groupCount0 = 0;
    a.$valid = 0;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode1 = 0;
}
let jur_MatchResultImpl__init_ = ($this, $string, $leftBound, $rightBound, $groupCount, $compQuantCount, $consumersCount) => {
    let var$7;
    jl_Object__init_($this);
    $this.$previousMatch = (-1);
    var$7 = $groupCount + 1 | 0;
    $this.$groupCount0 = var$7;
    $this.$groupBounds = $rt_createIntArray(var$7 * 2 | 0);
    $this.$consumers = $rt_createIntArray($consumersCount);
    ju_Arrays_fill($this.$consumers, (-1));
    if ($compQuantCount > 0)
        $this.$compQuantCounters = $rt_createIntArray($compQuantCount);
    ju_Arrays_fill($this.$groupBounds, (-1));
    $this.$reset($string, $leftBound, $rightBound);
},
jur_MatchResultImpl__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new jur_MatchResultImpl();
    jur_MatchResultImpl__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
jur_MatchResultImpl_setConsumed = ($this, $counter, $value) => {
    $this.$consumers.data[$counter] = $value;
},
jur_MatchResultImpl_getConsumed = ($this, $counter) => {
    return $this.$consumers.data[$counter];
},
jur_MatchResultImpl_end = $this => {
    return $this.$end(0);
},
jur_MatchResultImpl_end0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_setStart = ($this, $group, $offset) => {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
},
jur_MatchResultImpl_setEnd = ($this, $group, $offset) => {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
},
jur_MatchResultImpl_getStart = ($this, $group) => {
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnd = ($this, $group) => {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_getGroupNoCheck = ($this, $group) => {
    let $st, $end;
    $st = $this.$getStart($group);
    $end = $this.$getEnd($group);
    if (($end | $st | ($end - $st | 0)) >= 0 && $end <= $this.$string3.$length())
        return ($this.$string3.$subSequence($st, $end)).$toString();
    return null;
},
jur_MatchResultImpl_start = $this => {
    return $this.$start(0);
},
jur_MatchResultImpl_start0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_finalizeMatch = $this => {
    if ($this.$groupBounds.data[0] == (-1)) {
        $this.$groupBounds.data[0] = $this.$startIndex;
        $this.$groupBounds.data[1] = $this.$startIndex;
    }
    $this.$previousMatch = $this.$end0();
},
jur_MatchResultImpl_getEnterCounter = ($this, $setCounter) => {
    return $this.$compQuantCounters.data[$setCounter];
},
jur_MatchResultImpl_setEnterCounter = ($this, $setCounter, $value) => {
    $this.$compQuantCounters.data[$setCounter] = $value;
},
jur_MatchResultImpl_checkGroup = ($this, $group) => {
    if (!$this.$valid)
        $rt_throw(jl_IllegalStateException__init_0());
    if ($group >= 0 && $group < $this.$groupCount0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_1(jl_String_valueOf0($group)));
},
jur_MatchResultImpl_setValid = $this => {
    $this.$valid = 1;
},
jur_MatchResultImpl_isValid = $this => {
    return $this.$valid;
},
jur_MatchResultImpl_reset0 = ($this, $newSequence, $leftBound, $rightBound) => {
    $this.$valid = 0;
    $this.$mode1 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string3 = $newSequence;
    if ($leftBound >= 0)
        jur_MatchResultImpl_setBounds($this, $leftBound, $rightBound);
    $this.$startIndex = $this.$leftBound0;
},
jur_MatchResultImpl_reset = $this => {
    $this.$reset(null, (-1), (-1));
},
jur_MatchResultImpl_setBounds = ($this, $leftBound, $rightBound) => {
    $this.$leftBound0 = $leftBound;
    $this.$rightBound0 = $rightBound;
},
jur_MatchResultImpl_setStartIndex = ($this, $startIndex) => {
    $this.$startIndex = $startIndex;
    if ($this.$previousMatch >= 0)
        $startIndex = $this.$previousMatch;
    $this.$previousMatch = $startIndex;
},
jur_MatchResultImpl_getLeftBound = $this => {
    return $this.$leftBound0;
},
jur_MatchResultImpl_getRightBound = $this => {
    return $this.$rightBound0;
},
jur_MatchResultImpl_setMode = ($this, $mode) => {
    $this.$mode1 = $mode;
},
jur_MatchResultImpl_mode = $this => {
    return $this.$mode1;
},
jur_MatchResultImpl_useAnchoringBounds = ($this, $value) => {
    $this.$anchoringBounds = $value;
},
jur_MatchResultImpl_hasAnchoringBounds = $this => {
    return $this.$anchoringBounds;
},
jur_MatchResultImpl_hasTransparentBounds = $this => {
    return $this.$transparentBounds;
},
jur_MatchResultImpl_getPreviousMatchEnd = $this => {
    return $this.$previousMatch;
};
function jur_UCIRangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt2 = 0;
}
let jur_UCIRangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance();
    $this.$alt2 = $cc.$alt;
},
jur_UCIRangeSet__init_0 = var_0 => {
    let var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_UCIRangeSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, var$4;
    var$3 = $this.$chars1;
    var$4 = jl_Character_toUpperCase($testString.$charAt($strIndex));
    return !var$3.$contains(jl_Character_toLowerCase(var$4)) ? (-1) : 1;
},
cwtc_VoidCallback = $rt_classWithoutFields(0),
cwtd_App$CounterView$lambda$render$3$lambda$_3_0 = $rt_classWithoutFields(),
cwtd_App$CounterView$lambda$render$3$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$CounterView$lambda$render$3$lambda$_3_0__init_0 = () => {
    let var_0 = new cwtd_App$CounterView$lambda$render$3$lambda$_3_0();
    cwtd_App$CounterView$lambda$render$3$lambda$_3_0__init_(var_0);
    return var_0;
},
cwtd_App$CounterView$lambda$render$3$lambda$_3_0_update = (var$0, var$1) => {
    return cwtd_App$CounterView_lambda$render$2(var$1);
},
cwtd_App$CounterView$lambda$render$3$lambda$_3_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $jsString, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $jsNumber, $numberWrappers, $numberFinalizationRegistry;
    if ($o === null)
        return null;
    $type = $rt_str(typeof $o);
    $isObject = !$type.$equals($rt_s(215)) && !$type.$equals($rt_s(216)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($o);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrappers.set($o, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals($rt_s(217))) {
            $jsString = $o;
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            $stringFinalizationRegistry.register($wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals($rt_s(218))) {
            $jsNumber = $o;
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            $numberFinalizationRegistry.register($wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals($rt_s(219))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($o);
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_maybeUnwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof $rt_objcls()) ? $o : otji_JSWrapper_unwrap($o);
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$06 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$06 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierPart($ch);
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_isInstance = ($obj, $cls) => {
    return $obj !== null && !(typeof $obj.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable($obj.constructor, $cls) ? 1 : 0;
},
otp_Platform_isAssignable = ($from, $to) => {
    let $supertypes, $i;
    if ($from === $to)
        return 1;
    $supertypes = $from.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], $to))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_isPrimitive = $cls => {
    return $cls.$meta.primitive ? 1 : 0;
},
otp_Platform_getArrayItem = $cls => {
    return $cls.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
};
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt1 = null;
}
let jur_MultiLineSOLSet__init_ = ($this, $lt) => {
    jur_AbstractSet__init_($this);
    $this.$lt1 = $lt;
},
jur_MultiLineSOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineSOLSet();
    jur_MultiLineSOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineSOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let var$4, var$5;
    a: {
        if ($strIndex != $matchResult.$getRightBound()) {
            if (!$strIndex)
                break a;
            if ($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound())
                break a;
            var$4 = $this.$lt1;
            var$5 = $strIndex - 1 | 0;
            if (var$4.$isAfterLineTerminator($testString.$charAt(var$5), $testString.$charAt($strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineSOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookBehind();
    jur_NegativeLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        $shift = $e.$findBack(0, $stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
cwtd_App$renderApp$lambda$_2_15 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_15__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_15__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_15();
    cwtd_App$renderApp$lambda$_2_15__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_15_render = (var$0, var$1) => {
    return cwtd_App_renderHtmlElementsDemo(var$1);
},
cwtd_App$renderApp$lambda$_2_15_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_BackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_BackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_BackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $shift;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $shift = !($testString.$toString()).$startsWith0($group, $stringIndex) ? (-1) : $group.$length();
        if ($shift < 0)
            return (-1);
        $matchResult.$setConsumed($this.$consCounter1, $shift);
        return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_BackReferenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $group, $strLength, $testStr, var$7;
    $group = $this.$getString($matchResult);
    $strLength = $matchResult.$getLeftBound();
    if ($group !== null && ($strIndex + $group.$length() | 0) <= $strLength) {
        $testStr = $testString.$toString();
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            var$7 = $testStr.$indexOf0($group, $strIndex);
            if (var$7 < 0)
                return (-1);
            if ($this.$next1.$matches(var$7 + $group.$length() | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = var$7 + 1 | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $group, $testStr, var$7;
    $group = $this.$getString($matchResult);
    if ($group === null)
        return (-1);
    $testStr = $testString.$toString();
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf0($group, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$7 + $group.$length() | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyLower__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyLower__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyLower_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(97, 122);
};
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
let jur_DotQuantifierSet__init_ = ($this, $innerSet, $next, $type, $lt) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$lt = $lt;
},
jur_DotQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_DotQuantifierSet();
    jur_DotQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_DotQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startSearch;
    $strLength = $matchResult.$getRightBound();
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $res, $nextSearch, var$7, $leftBound;
    $strLength = $matchResult.$getRightBound();
    $res = $this.$next1.$find($stringIndex, $testString, $matchResult);
    if ($res < 0)
        return (-1);
    $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
    if ($nextSearch >= 0)
        $strLength = $nextSearch;
    var$7 = $this.$next1.$findBack($res, $strLength, $testString, $matchResult);
    var$7 = jl_Math_max($res, var$7);
    $leftBound = var$7 > 0 ? jur_DotQuantifierSet_findBackLineTerminator($this, $stringIndex, var$7 - 1 | 0, $testString) : var$7 ? (-1) : 0;
    if ($leftBound >= $stringIndex)
        $stringIndex = $leftBound >= var$7 ? $leftBound : $leftBound + 1 | 0;
    return $stringIndex;
},
jur_DotQuantifierSet_findLineTerminator = ($this, $i, $to, $testString) => {
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jur_DotQuantifierSet_findBackLineTerminator = ($this, $from, $i, $testString) => {
    while (true) {
        if ($i < $from)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + (-1) | 0;
    }
    return $i;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1() {
    jl_Object.call(this);
    this.$_028 = 0;
}
let cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_028 = var$1;
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1();
    cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1_call = var$0 => {
    cwtd_App_lambda$renderTimerFunctional$11(var$0.$_028);
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1_call$exported$0 = var$1 => {
    var$1.$call();
};
function cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0() {
    jl_Object.call(this);
    this.$_040 = null;
}
let cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_040 = var$1;
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0();
    cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0_call = var$0 => {
    cwtd_App_lambda$renderTimerFunctional$10(var$0.$_040);
},
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0_call$exported$0 = var$1 => {
    var$1.$call();
},
jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaTitleCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaTitleCase_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaTitleCase$1__init_0($this);
};
function cwtd_App$CounterView() {
    cwtc_ReactView.call(this);
    this.$count = null;
}
let cwtd_App$CounterView__init_ = $this => {
    cwtc_ReactView__init_($this);
    $this.$count = cwth_Hooks_useState0(0);
},
cwtd_App$CounterView__init_0 = () => {
    let var_0 = new cwtd_App$CounterView();
    cwtd_App$CounterView__init_(var_0);
    return var_0;
},
cwtd_App$CounterView_render = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $rt_createArray(jl_Object, 5);
    var$2 = var$1.data;
    var$2[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(220)));
    var$3 = $this.$count;
    var$4 = var$3.$getInt();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(221)), var$4);
    var$2[1] = otji_JSWrapper_wrap(cwth_Html_p(jl_StringBuilder_toString(var$3)));
    var$2[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(222)), otji_JSWrapper_unwrap(cwtd_App$CounterView$render$lambda$_1_0__init_0($this)))));
    var$2[3] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(223)), otji_JSWrapper_unwrap(cwtd_App$CounterView$render$lambda$_1_1__init_0($this)))));
    var$2[4] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(214)), otji_JSWrapper_unwrap(cwtd_App$CounterView$render$lambda$_1_2__init_0($this)))));
    return cwth_Html_div(var$1);
},
cwtd_App$CounterView_lambda$render$4 = ($this, $e) => {
    $this.$count.$setInt(0);
},
cwtd_App$CounterView_lambda$render$3 = ($this, $e) => {
    $this.$count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$CounterView$lambda$render$3$lambda$_3_0__init_0()));
},
cwtd_App$CounterView_lambda$render$2 = $c => {
    return $c - 1 | 0;
},
cwtd_App$CounterView_lambda$render$1 = ($this, $e) => {
    $this.$count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$CounterView$lambda$render$1$lambda$_5_0__init_0()));
},
cwtd_App$CounterView_lambda$render$0 = $c => {
    return $c + 1 | 0;
},
jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet),
jur_PreviousMatch__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_PreviousMatch__init_0 = () => {
    let var_0 = new jur_PreviousMatch();
    jur_PreviousMatch__init_(var_0);
    return var_0;
},
jur_PreviousMatch_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex != $matchResult.$getPreviousMatchEnd())
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PreviousMatch_hasConsumed = ($this, $matchResult) => {
    return 0;
},
otcir_MethodInfo = $rt_classWithoutFields(),
jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_UnifiedQuantifierSet__init_ = ($this, $quant) => {
    jur_LeafQuantifierSet__init_($this, $quant.$getInnerSet(), $quant.$getNext(), $quant.$getType());
    $this.$innerSet.$setNext($this);
},
jur_UnifiedQuantifierSet__init_0 = var_0 => {
    let var_1 = new jur_UnifiedQuantifierSet();
    jur_UnifiedQuantifierSet__init_(var_1, var_0);
    return var_1;
},
jur_UnifiedQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf;
        if (var$4.$accepts($stringIndex, $testString) <= 0)
            break;
        $stringIndex = $stringIndex + $this.$leaf.$charCount() | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_UnifiedQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next1.$find($stringIndex, $testString, $matchResult);
    if ($startSearch < 0)
        return (-1);
    $newSearch = $startSearch - $this.$leaf.$charCount() | 0;
    while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
        $newSearch_0 = $newSearch - $this.$leaf.$charCount() | 0;
        $startSearch = $newSearch;
        $newSearch = $newSearch_0;
    }
    return $startSearch;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class__init_0 = ($this, $platformClass) => {
    let var$2;
    jl_Object__init_($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init_ = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_0(var_1, var_0);
    return var_1;
},
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init_($cls);
    return $result;
},
jl_Class_getPlatformClass = $this => {
    return $this.$platformClass;
},
jl_Class_isInstance = ($this, $obj) => {
    return otp_Platform_isInstance($obj, $this.$platformClass);
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
jl_Class_isPrimitive = $this => {
    return otp_Platform_isPrimitive($this.$platformClass);
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
};
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data = null;
    a.$length1 = 0;
}
let ju_BitSet__init_0 = $this => {
    jl_Object__init_($this);
    $this.$data = $rt_createIntArray(2);
},
ju_BitSet__init_1 = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet__init_ = ($this, $nbits) => {
    jl_Object__init_($this);
    if ($nbits < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    $this.$data = $rt_createIntArray((($nbits + 32 | 0) - 1 | 0) / 32 | 0);
},
ju_BitSet__init_2 = var_0 => {
    let var_1 = new ju_BitSet();
    ju_BitSet__init_(var_1, var_0);
    return var_1;
},
ju_BitSet_set = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length1) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length1 = $bitIndex + 1 | 0;
    }
    var$3 = $this.$data.data;
    var$3[$index] = var$3[$index] | 1 << ($bitIndex % 32 | 0);
},
ju_BitSet_set0 = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0) {
        var$3 = $rt_compare($fromIndex, $toIndex);
        if (var$3 <= 0) {
            if (!var$3)
                return;
            $fromDataIndex = $fromIndex / 32 | 0;
            $toDataIndex = $toIndex / 32 | 0;
            if ($toIndex > $this.$length1) {
                ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
                $this.$length1 = $toIndex;
            }
            if ($fromDataIndex == $toDataIndex) {
                var$6 = $this.$data.data;
                var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
            } else {
                var$6 = $this.$data.data;
                var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
                $i = $fromDataIndex + 1 | 0;
                while ($i < $toDataIndex) {
                    $this.$data.data[$i] = (-1);
                    $i = $i + 1 | 0;
                }
                if ($toIndex & 31) {
                    var$6 = $this.$data.data;
                    var$6[$toDataIndex] = var$6[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
                }
            }
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return (-1) << var$2;
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return !var$2 ? 0 : (-1) >>> (32 - var$2 | 0) | 0;
},
ju_BitSet_clear0 = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    if ($index < $this.$data.data.length) {
        var$3 = $this.$data.data;
        var$3[$index] = var$3[$index] & jl_Integer_rotateLeft((-2), $bitIndex % 32 | 0);
        if ($bitIndex == ($this.$length1 - 1 | 0))
            ju_BitSet_recalculateLength($this);
    }
},
ju_BitSet_clear = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0 && $fromIndex <= $toIndex) {
        if ($fromIndex >= $this.$length1)
            return;
        var$3 = jl_Math_min($this.$length1, $toIndex);
        if ($fromIndex == var$3)
            return;
        $fromDataIndex = $fromIndex / 32 | 0;
        $toDataIndex = var$3 / 32 | 0;
        if ($fromDataIndex == $toDataIndex) {
            var$6 = $this.$data.data;
            var$6[$fromDataIndex] = var$6[$fromDataIndex] & (ju_BitSet_trailingOneBits($this, $fromIndex) | ju_BitSet_trailingZeroBits($this, var$3));
        } else {
            var$6 = $this.$data.data;
            var$6[$fromDataIndex] = var$6[$fromDataIndex] & ju_BitSet_trailingOneBits($this, $fromIndex);
            $i = $fromDataIndex + 1 | 0;
            while ($i < $toDataIndex) {
                $this.$data.data[$i] = 0;
                $i = $i + 1 | 0;
            }
            if (var$3 & 31) {
                var$6 = $this.$data.data;
                var$6[$toDataIndex] = var$6[$toDataIndex] & ju_BitSet_trailingZeroBits($this, var$3);
            }
        }
        ju_BitSet_recalculateLength($this);
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_get = ($this, $bitIndex) => {
    let $index;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    return $index < $this.$data.data.length && $this.$data.data[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($fromIndex >= $this.$length1)
        return (-1);
    $index = $fromIndex / 32 | 0;
    $val = $this.$data.data[$index];
    var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
    if (var$4)
        return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if ($this.$data.data[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_BitSet_nextClearBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($fromIndex >= $this.$length1)
        return $fromIndex;
    $index = $fromIndex / 32 | 0;
    $val = $this.$data.data[$index] ^ (-1);
    var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
    if (var$4)
        return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if ($this.$data.data[$i] != (-1))
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i] ^ (-1)) | 0;
        $i = $i + 1 | 0;
    }
    return $this.$length1;
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength;
    if ($this.$data.data.length >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($this.$data.data.length * 2 | 0) + 1 | 0);
    $this.$data = ju_Arrays_copyOf2($this.$data, $newArrayLength);
},
ju_BitSet_recalculateLength = $this => {
    let $top, $i, $sz;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $this.$length1 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length1 = $this.$length1 - 32 | 0;
        }
        $this.$length1 = $this.$length1 - $sz | 0;
    }
},
ju_BitSet_intersects = ($this, $set) => {
    let $sz, $i;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        if ($this.$data.data[$i] & $set.$data.data[$i])
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
ju_BitSet_and = ($this, $set) => {
    let $i, $i_0, var$4;
    $i = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while ($i < $this.$data.data.length) {
        $this.$data.data[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length1 = jl_Math_min($this.$length1, $set.$length1);
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_andNot = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] & ($set.$data.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_or = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length1 = jl_Math_max($this.$length1, $set.$length1);
    ju_BitSet_ensureCapacity($this, ($this.$length1 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] | $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
},
ju_BitSet_xor = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length1 = jl_Math_max($this.$length1, $set.$length1);
    ju_BitSet_ensureCapacity($this, ($this.$length1 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] ^ $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_isEmpty = $this => {
    return $this.$length1 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$013 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_ = ($this, $this$0) => {
    $this.$this$013 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierStart($ch);
},
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0();
    cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderUseMemoDemo$41(var$1);
},
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jur_NonCapFSet = $rt_classWithoutFields(jur_FSet),
jur_NonCapFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_NonCapFSet__init_0 = var_0 => {
    let var_1 = new jur_NonCapFSet();
    jur_NonCapFSet__init_(var_1, var_0);
    return var_1;
},
jur_NonCapFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_NonCapFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function cwtd_App$CharCounterView() {
    cwtc_ReactView.call(this);
    this.$text0 = null;
}
let cwtd_App$CharCounterView__init_ = $this => {
    cwtc_ReactView__init_($this);
    $this.$text0 = cwth_Hooks_useState($rt_s(9));
},
cwtd_App$CharCounterView__init_0 = () => {
    let var_0 = new cwtd_App$CharCounterView();
    cwtd_App$CharCounterView__init_(var_0);
    return var_0;
},
cwtd_App$CharCounterView_render = $this => {
    let $val, $chars, $words, var$4, var$5, var$6, var$7, var$8;
    $val = $this.$text0.$getString0();
    $chars = $val.$length();
    $words = $val.$isEmpty() ? 0 : (($val.$trim()).$split($rt_s(224))).data.length;
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(225)));
    var$6 = cwth_Html_textarea();
    var$7 = cwth_ElementBuilder_value(var$6, $val);
    var$6 = cwtd_App$CharCounterView$render$lambda$_1_0__init_0($this);
    var$6 = cwth_ElementBuilder_onChange(var$7, otji_JSWrapper_unwrap(var$6));
    var$6 = cwth_ElementBuilder_placeholder(var$6, $rt_s(226));
    var$6 = cwth_ElementBuilder_rows(var$6, 4);
    var$6 = cwth_ElementBuilder_cols(var$6, 50);
    var$5[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$6));
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(var$8, $chars), $rt_s(227)), $words), $rt_s(228));
    var$6 = jl_StringBuilder_toString(var$8);
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_p(var$6));
    var$6 = $chars <= 0 ? cwth_Html_p($rt_s(229)) : cwth_Html_pre($val.$toUpperCase0());
    var$5[3] = otji_JSWrapper_wrap(var$6);
    return cwth_Html_div(var$4);
},
cwtd_App$CharCounterView_lambda$render$0 = ($this, $e) => {
    $this.$text0.$setString($rt_str($e.target.value));
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf1 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createByteArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf2 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createIntArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill = ($a, $val) => {
    ju_Arrays_fill0($a, 0, $a.data.length, $val);
};
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
let jur_CharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch0 = $ch;
},
jur_CharSet__init_ = var_0 => {
    let var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CharSet_charCount = $this => {
    return 1;
},
jur_CharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch0 != $testString.$charAt($strIndex) ? (-1) : 1;
},
jur_CharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = $testStr.$indexOf1($this.$ch0, $strIndex);
        if (var$6 < 0)
            return (-1);
        var$7 = $this.$next1;
        $strIndex = var$6 + 1 | 0;
        if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_CharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = $testStr.$lastIndexOf1($this.$ch0, $lastIndex);
            if (var$6 < 0)
                break a;
            if (var$6 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$6 + (-1) | 0;
        }
        return var$6;
    }
    return (-1);
},
jur_CharSet_getChar = $this => {
    return $this.$ch0;
},
jur_CharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return $set.$getChar() != $this.$ch0 ? 0 : 1;
    if (!($set instanceof jur_RangeSet)) {
        if ($set instanceof jur_SupplRangeSet)
            return $set.$contains($this.$ch0);
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return $set.$accepts(0, jl_Character_toString($this.$ch0)) <= 0 ? 0 : 1;
};
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch4 = 0;
}
let jur_UCISupplCharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch4 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
},
jur_UCISupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_UCISupplCharSet();
    jur_UCISupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return $this.$ch4 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
},
jl_System = $rt_classWithoutFields(),
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6, $srcType, $targetType, $srcArray, $i, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
            var$6 = $destPos + $length | 0;
            if (var$6 <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$6 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$6 + 1 | 0;
                                        $elem = var$11[var$6];
                                        if (!jl_Class_isInstance($targetType, $elem)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $rt_throw(jl_ArrayStoreException__init_());
                                        }
                                        $i = $i + 1 | 0;
                                        var$6 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $rt_throw(jl_ArrayStoreException__init_());
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $rt_throw(jl_ArrayStoreException__init_());
            }
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(230)));
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6;
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
        var$6 = $destPos + $length | 0;
        if (var$6 <= jlr_Array_getLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
};
function jur_CharClass$3() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$cc = null;
    a.$this$01 = null;
}
let jur_CharClass$3__init_ = ($this, var$1, var$2, var$3) => {
    $this.$this$01 = var$1;
    $this.$val$curAlt = var$2;
    $this.$val$cc = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$3__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$3();
    jur_CharClass$3__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$3_contains = ($this, $ch) => {
    return !($this.$val$curAlt ^ $this.$this$01.$bits.$get0($ch)) && !($this.$val$curAlt ^ $this.$this$01.$inverted ^ $this.$val$cc.$contains($ch)) ? 0 : 1;
};
function jur_CharClass$4() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt9 = 0;
    a.$val$nb4 = null;
    a.$val$cc2 = null;
    a.$this$031 = null;
}
let jur_CharClass$4__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$031 = $this$0;
    $this.$val$curAlt9 = var$2;
    $this.$val$nb4 = var$3;
    $this.$val$cc2 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$4__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$4();
    jur_CharClass$4__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$4_contains = ($this, $ch) => {
    return $this.$val$curAlt9 ^ (!$this.$val$nb4.$contains($ch) && !$this.$val$cc2.$contains($ch) ? 0 : 1) ? 0 : 1;
},
cwtd_App = $rt_classWithoutFields(),
cwtd_App_THEME_CTX = null,
cwtd_App_$callClinit = () => {
    cwtd_App_$callClinit = $rt_eraseClinit(cwtd_App);
    cwtd_App__clinit_();
},
cwtd_App_main = $args => {
    let $root, var$3;
    cwtd_App_$callClinit();
    $root = ReactDOM.createRoot((otjdh_HTMLDocument_current()).getElementById("root"));
    var$3 = cwth_Html_component(otji_JSWrapper_unwrap(cwtd_App$main$lambda$_1_0__init_0()), $rt_s(231));
    $root.render(var$3);
},
cwtd_App_renderApp = $props => {
    let $theme, $isDark, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13;
    cwtd_App_$callClinit();
    $theme = cwth_Hooks_useState($rt_s(232));
    $isDark = ($theme.$getString0()).$equals($rt_s(233));
    var$4 = cwtd_App_THEME_CTX;
    var$5 = $theme.$getString0();
    var$6 = $rt_createArray(jl_Object, 1);
    var$7 = $rt_createArray(jl_Object, 13);
    var$8 = var$7.data;
    var$9 = $rt_wrapArray(jl_Object, [otji_JSWrapper_wrap(cwth_Html_h1($rt_s(234))), otji_JSWrapper_wrap(cwth_Html_p($rt_s(235)))]);
    var$8[0] = otji_JSWrapper_wrap(cwth_Html_header(var$9));
    var$10 = $rt_createArray(jl_Object, 1);
    var$11 = !$isDark ? $rt_s(236) : $rt_s(237);
    var$12 = var$10.data;
    var$9 = var$6.data;
    var$13 = cwth_Html_button(var$11);
    var$11 = cwtd_App$renderApp$lambda$_2_0__init_0($theme, $isDark);
    var$11 = cwth_ElementBuilder_onClick(var$13, otji_JSWrapper_unwrap(var$11));
    var$11 = cwth_ElementBuilder_className(var$11, $rt_s(238));
    var$12[0] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$11));
    var$8[1] = otji_JSWrapper_wrap(cwth_Html_nav(var$10));
    var$8[2] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$10 = $rt_createArray(jl_Object, 6);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(239)));
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(240)));
    var$11 = cwtd_App$renderApp$lambda$_2_1__init_0();
    var$12[2] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(241)));
    var$11 = cwtd_App$renderApp$lambda$_2_2__init_0();
    var$12[3] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(242)));
    var$11 = cwtd_App$renderApp$lambda$_2_3__init_0();
    var$12[4] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(243)));
    var$11 = cwtd_App$renderApp$lambda$_2_4__init_0();
    var$12[5] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(244)));
    var$8[3] = otji_JSWrapper_wrap(cwth_Html_section(var$10));
    var$8[4] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$10 = $rt_createArray(jl_Object, 6);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(245)));
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(246)));
    var$11 = cwtd_App$renderApp$lambda$_2_5__init_0();
    var$12[2] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(247)));
    var$11 = cwtd_App$renderApp$lambda$_2_6__init_0();
    var$12[3] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(248)));
    var$11 = cwtd_App$renderApp$lambda$_2_7__init_0();
    var$12[4] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(249)));
    var$11 = cwtd_App$renderApp$lambda$_2_8__init_0();
    var$12[5] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(250)));
    var$8[5] = otji_JSWrapper_wrap(cwth_Html_section(var$10));
    var$8[6] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$10 = $rt_createArray(jl_Object, 5);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(251)));
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(252)));
    var$11 = cwtd_App$renderApp$lambda$_2_9__init_0();
    var$12[2] = otji_JSWrapper_wrap(cwtc_ReactView_view(var$11, $rt_s(253)));
    var$11 = cwtd_App$renderApp$lambda$_2_10__init_0();
    var$12[3] = otji_JSWrapper_wrap(cwtc_ReactView_view(var$11, $rt_s(254)));
    var$11 = cwtd_App$renderApp$lambda$_2_11__init_0();
    var$12[4] = otji_JSWrapper_wrap(cwtc_ReactView_view(var$11, $rt_s(255)));
    var$8[7] = otji_JSWrapper_wrap(cwth_Html_section(var$10));
    var$8[8] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$10 = $rt_createArray(jl_Object, 4);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(256)));
    var$11 = cwtd_App$renderApp$lambda$_2_12__init_0();
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(257)));
    var$11 = cwtd_App$renderApp$lambda$_2_13__init_0();
    var$12[2] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(258)));
    var$11 = cwtd_App$renderApp$lambda$_2_14__init_0();
    var$12[3] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(259)));
    var$8[9] = otji_JSWrapper_wrap(cwth_Html_section(var$10));
    var$8[10] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$10 = $rt_createArray(jl_Object, 2);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(260)));
    var$11 = cwtd_App$renderApp$lambda$_2_15__init_0();
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_component(otji_JSWrapper_unwrap(var$11), $rt_s(261)));
    var$8[11] = otji_JSWrapper_wrap(cwth_Html_section(var$10));
    var$10 = $rt_createArray(jl_Object, 2);
    var$12 = var$10.data;
    var$12[0] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$12[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(262)));
    var$8[12] = otji_JSWrapper_wrap(cwth_Html_footer(var$10));
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_div(var$7));
    return var$4.$provide(var$5, var$6);
},
cwtd_App_renderCounterFunctional = $props => {
    let $count, $step, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    cwtd_App_$callClinit();
    $count = cwth_Hooks_useState0(0);
    $step = cwth_Hooks_useState0(1);
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(263)));
    var$6 = $count.$getInt();
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(221)), var$6);
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_p(jl_StringBuilder_toString(var$7)));
    var$8 = $rt_createArray(jl_Object, 3);
    var$9 = var$8.data;
    var$10 = $step.$getInt();
    var$11 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(var$11, 45), var$10);
    var$7 = cwth_Html_button(jl_StringBuilder_toString(var$11));
    var$11 = cwtd_App$renderCounterFunctional$lambda$_3_0__init_0($count, $step);
    var$11 = cwth_ElementBuilder_onClick(var$7, otji_JSWrapper_unwrap(var$11));
    var$9[0] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$11));
    var$10 = $step.$getInt();
    var$11 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(var$11, 43), var$10);
    var$7 = cwth_Html_button(jl_StringBuilder_toString(var$11));
    var$11 = cwtd_App$renderCounterFunctional$lambda$_3_1__init_0($count, $step);
    var$11 = cwth_ElementBuilder_onClick(var$7, otji_JSWrapper_unwrap(var$11));
    var$9[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$11));
    var$7 = cwth_Html_button($rt_s(214));
    var$11 = cwtd_App$renderCounterFunctional$lambda$_3_2__init_0($count);
    var$11 = cwth_ElementBuilder_onClick(var$7, otji_JSWrapper_unwrap(var$11));
    var$9[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$11));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_div(var$8));
    var$8 = $rt_createArray(jl_Object, 4);
    var$9 = var$8.data;
    var$9[0] = otji_JSWrapper_wrap("Step: ");
    var$9[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(264)), otji_JSWrapper_unwrap(cwtd_App$renderCounterFunctional$lambda$_3_3__init_0($step)))));
    var$9[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(265)), otji_JSWrapper_unwrap(cwtd_App$renderCounterFunctional$lambda$_3_4__init_0($step)))));
    var$9[3] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(266)), otji_JSWrapper_unwrap(cwtd_App$renderCounterFunctional$lambda$_3_5__init_0($step)))));
    var$5[3] = otji_JSWrapper_wrap(cwth_Html_div(var$8));
    return cwth_Html_div(var$4);
},
cwtd_App_renderTimerFunctional = $props => {
    let $seconds, $running, $mins, $secs, var$6, var$7, var$8, $display, var$10, var$11;
    cwtd_App_$callClinit();
    $seconds = cwth_Hooks_useState0(0);
    $running = cwth_Hooks_useState1(1);
    cwth_Hooks_useEffect(otji_JSWrapper_unwrap(cwtd_App$renderTimerFunctional$lambda$_4_0__init_0($running, $seconds)));
    $mins = $seconds.$getInt() / 60 | 0;
    $secs = $seconds.$getInt() % 60 | 0;
    var$6 = $mins >= 10 ? $rt_s(9) : $rt_s(208);
    var$7 = $secs >= 10 ? $rt_s(9) : $rt_s(208);
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append(var$8, var$6), $mins), 58), var$7), $secs);
    $display = jl_StringBuilder_toString(var$8);
    var$10 = $rt_createArray(jl_Object, 4);
    var$11 = var$10.data;
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(267)));
    var$11[1] = otji_JSWrapper_wrap(cwth_Html_p($display));
    var$6 = cwth_Html_button(!$running.$getBool() ? $rt_s(268) : $rt_s(269));
    var$7 = cwtd_App$renderTimerFunctional$lambda$_4_1__init_0($running);
    var$6 = cwth_ElementBuilder_onClick(var$6, otji_JSWrapper_unwrap(var$7));
    var$6 = cwth_ElementBuilder_className(var$6, !$running.$getBool() ? $rt_s(212) : $rt_s(213));
    var$11[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$6));
    var$6 = cwth_Html_button($rt_s(214));
    var$7 = cwtd_App$renderTimerFunctional$lambda$_4_2__init_0($seconds, $running);
    var$6 = cwth_ElementBuilder_onClick(var$6, otji_JSWrapper_unwrap(var$7));
    var$11[3] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$6));
    return cwth_Html_div(var$10);
},
cwtd_App_renderTextInputFunctional = $props => {
    let $value, $focused, $charCount, var$5, var$6, var$7, var$8;
    cwtd_App_$callClinit();
    $value = cwth_Hooks_useState($rt_s(9));
    $focused = cwth_Hooks_useState1(0);
    $charCount = ($value.$getString0()).$length();
    var$5 = $rt_createArray(jl_Object, 4);
    var$6 = var$5.data;
    var$6[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(270)));
    var$7 = cwth_Html_input($rt_s(271));
    var$7 = cwth_ElementBuilder_value(var$7, $value.$getString0());
    var$8 = cwtd_App$renderTextInputFunctional$lambda$_5_0__init_0($value);
    var$7 = cwth_ElementBuilder_onChange(var$7, otji_JSWrapper_unwrap(var$8));
    var$8 = cwtd_App$renderTextInputFunctional$lambda$_5_1__init_0($focused);
    var$7 = cwth_ElementBuilder_onFocus(var$7, otji_JSWrapper_unwrap(var$8));
    var$8 = cwtd_App$renderTextInputFunctional$lambda$_5_2__init_0($focused);
    var$7 = cwth_ElementBuilder_onBlur(var$7, otji_JSWrapper_unwrap(var$8));
    var$7 = cwth_ElementBuilder_placeholder(var$7, $rt_s(272));
    var$7 = cwth_ElementBuilder_maxLength(var$7, 100);
    var$6[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$7));
    var$7 = !$focused.$getBool() ? $rt_s(9) : $rt_s(273);
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(var$8, $charCount), $rt_s(274)), var$7);
    var$6[2] = otji_JSWrapper_wrap(cwth_Html_p(jl_StringBuilder_toString(var$8)));
    if ($charCount <= 0)
        var$7 = cwth_Html_p($rt_s(275));
    else {
        var$7 = ((jl_StringBuilder__init_4($value.$getString0())).$reverse0()).$toString();
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$8, $rt_s(276)), var$7);
        var$7 = cwth_Html_p(jl_StringBuilder_toString(var$8));
    }
    var$6[3] = otji_JSWrapper_wrap(var$7);
    return cwth_Html_div(var$5);
},
cwtd_App_renderTodoListFunctional = $props => {
    let $input, $nextId, $todoIds, $todoTexts, $todoDone, $ids, var$8, $texts, $dones, $count, $completed, $i, $items, $done, var$16, var$17, var$18, var$19, var$20;
    cwtd_App_$callClinit();
    $input = cwth_Hooks_useState($rt_s(9));
    $nextId = cwth_Hooks_useState0(3);
    $todoIds = cwth_Hooks_useState($rt_s(277));
    $todoTexts = cwth_Hooks_useState($rt_s(278));
    $todoDone = cwth_Hooks_useState($rt_s(279));
    $ids = ($todoIds.$getString0()).$split($rt_s(280));
    var$8 = $ids.data;
    $texts = ($todoTexts.$getString0()).$split($rt_s(280));
    $dones = ($todoDone.$getString0()).$split($rt_s(280));
    $count = var$8.length;
    if (var$8[0].$isEmpty())
        $count = 0;
    $completed = 0;
    $i = 0;
    while ($i < $count) {
        if ($dones.data[$i].$equals($rt_s(281)))
            $completed = $completed + 1 | 0;
        $i = $i + 1 | 0;
    }
    $items = $rt_createArray(jl_Object, $count);
    $i = 0;
    while ($i < $count) {
        $done = $dones.data[$i].$equals($rt_s(281));
        var$16 = $rt_createArray(jl_Object, 3);
        var$8 = var$16.data;
        var$17 = cwth_Html_input($rt_s(282));
        var$18 = cwth_ElementBuilder_checked(var$17, $done);
        var$17 = cwtd_App$renderTodoListFunctional$lambda$_6_3__init_0($todoDone, $i);
        var$17 = cwth_ElementBuilder_onChange(var$18, otji_JSWrapper_unwrap(var$17));
        var$8[0] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$17));
        var$17 = !$done ? cwth_Html_span($texts.data[$i]) : cwth_Html_em($texts.data[$i]);
        var$19 = $items.data;
        var$8[1] = otji_JSWrapper_wrap(var$17);
        var$18 = cwth_Html_button($rt_s(283));
        var$17 = cwtd_App$renderTodoListFunctional$lambda$_6_4__init_0($todoIds, $todoTexts, $todoDone, $i);
        var$17 = cwth_ElementBuilder_onClick(var$18, otji_JSWrapper_unwrap(var$17));
        var$17 = cwth_ElementBuilder_className(var$17, $rt_s(284));
        var$8[2] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$17));
        var$19[$i] = otji_JSWrapper_wrap(cwth_Html_li0(var$16));
        $i = $i + 1 | 0;
    }
    var$19 = $rt_createArray(jl_Object, 4);
    var$20 = var$19.data;
    var$20[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(285)));
    var$17 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$17, $completed), 47), $count), $rt_s(286));
    var$17 = jl_StringBuilder_toString(var$17);
    var$20[1] = otji_JSWrapper_wrap(cwth_Html_p(var$17));
    var$8 = $rt_createArray(jl_Object, 2);
    var$16 = var$8.data;
    var$17 = cwth_Html_input($rt_s(271));
    var$17 = cwth_ElementBuilder_value(var$17, $input.$getString0());
    var$18 = cwtd_App$renderTodoListFunctional$lambda$_6_0__init_0($input);
    var$17 = cwth_ElementBuilder_onChange(var$17, otji_JSWrapper_unwrap(var$18));
    var$18 = cwtd_App$renderTodoListFunctional$lambda$_6_1__init_0($input, $todoIds, $todoTexts, $todoDone, $nextId);
    var$17 = cwth_ElementBuilder_onKeyDown(var$17, otji_JSWrapper_unwrap(var$18));
    var$17 = cwth_ElementBuilder_placeholder(var$17, $rt_s(287));
    var$16[0] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$17));
    var$17 = cwth_Html_button($rt_s(288));
    var$18 = cwtd_App$renderTodoListFunctional$lambda$_6_2__init_0($input, $todoIds, $todoTexts, $todoDone, $nextId);
    var$17 = cwth_ElementBuilder_onClick(var$17, otji_JSWrapper_unwrap(var$18));
    var$17 = cwth_ElementBuilder_disabled(var$17, ($input.$getString0()).$isEmpty());
    var$16[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$17));
    var$20[2] = otji_JSWrapper_wrap(cwth_Html_div(var$8));
    var$20[3] = otji_JSWrapper_wrap(cwth_Html_ul($items));
    return cwth_Html_div(var$19);
},
cwtd_App_addTodo = ($ids, $texts, $dones, $nextId, $input) => {
    let $sep, var$7, var$8, var$9, var$10;
    cwtd_App_$callClinit();
    $sep = !($ids.$getString0()).$isEmpty() ? $rt_s(280) : $rt_s(9);
    var$7 = $ids.$getString0();
    var$8 = $nextId.$getInt();
    var$9 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$9, var$7), $sep), var$8);
    $ids.$setString(jl_StringBuilder_toString(var$9));
    var$9 = $texts.$getString0();
    var$7 = $input.$getString0();
    var$10 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$10, var$9), $sep), var$7);
    $texts.$setString(jl_StringBuilder_toString(var$10));
    var$9 = $dones.$getString0();
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$7, var$9), $sep), $rt_s(289));
    $dones.$setString(jl_StringBuilder_toString(var$7));
    $nextId.$updateInt(otji_JSWrapper_unwrap(cwtd_App$addTodo$lambda$_7_0__init_0()));
    $input.$setString($rt_s(9));
},
cwtd_App_removeAt = ($arr, $idx) => {
    let $sb, $i, var$5;
    cwtd_App_$callClinit();
    $sb = jl_StringBuilder__init_();
    $i = 0;
    while (true) {
        var$5 = $arr.data;
        if ($i >= var$5.length)
            break;
        if ($i != $idx) {
            if ($sb.$length() > 0)
                $sb.$append12($rt_s(280));
            $sb.$append12(var$5[$i]);
        }
        $i = $i + 1 | 0;
    }
    return $sb.$toString();
},
cwtd_App_joinArray = $arr => {
    let $sb, $i, var$4;
    cwtd_App_$callClinit();
    $sb = jl_StringBuilder__init_();
    $i = 0;
    while (true) {
        var$4 = $arr.data;
        if ($i >= var$4.length)
            break;
        if ($i > 0)
            $sb.$append12($rt_s(280));
        $sb.$append12(var$4[$i]);
        $i = $i + 1 | 0;
    }
    return $sb.$toString();
},
cwtd_App_renderPageNavigationBuilder = $props => {
    let $currentPage, var$3, var$4, var$5, var$6, var$7;
    cwtd_App_$callClinit();
    $currentPage = cwth_Hooks_useState($rt_s(290));
    var$3 = (cwth_DomBuilder$Div_create()).$className0($rt_s(291));
    var$4 = (cwth_DomBuilder$Nav_create()).$className0($rt_s(292));
    var$4 = var$4.$child(((cwth_DomBuilder$H3_create()).$text($rt_s(293))).$build());
    var$5 = (cwth_DomBuilder$Div_create()).$className0($rt_s(294));
    var$6 = (cwth_DomBuilder$Button_create()).$text($rt_s(295));
    var$7 = cwtd_App$renderPageNavigationBuilder$lambda$_10_0__init_0($currentPage);
    var$7 = var$6.$onClick0(otji_JSWrapper_unwrap(var$7));
    var$7 = (var$7.$className0($rt_s(296))).$build();
    var$5 = var$5.$child(var$7);
    var$6 = (cwth_DomBuilder$Button_create()).$text($rt_s(297));
    var$7 = cwtd_App$renderPageNavigationBuilder$lambda$_10_1__init_0($currentPage);
    var$7 = var$6.$onClick0(otji_JSWrapper_unwrap(var$7));
    var$7 = (var$7.$className0($rt_s(296))).$build();
    var$5 = var$5.$child(var$7);
    var$6 = (cwth_DomBuilder$Button_create()).$text($rt_s(298));
    var$7 = cwtd_App$renderPageNavigationBuilder$lambda$_10_2__init_0($currentPage);
    var$7 = var$6.$onClick0(otji_JSWrapper_unwrap(var$7));
    var$7 = (var$7.$className0($rt_s(296))).$build();
    var$7 = var$5.$child(var$7);
    var$7 = var$7.$build();
    var$7 = var$4.$child(var$7);
    var$7 = var$7.$build();
    var$7 = var$3.$child(var$7);
    var$3 = (cwth_DomBuilder$Div_create()).$className0($rt_s(299));
    var$3 = var$3.$child(cwtd_App_renderNavPage($currentPage.$getString0()));
    var$3 = var$3.$build();
    var$7 = var$7.$child(var$3);
    var$7 = var$7.$build();
    return var$7;
},
cwtd_App_renderNavPage = $page => {
    let var$2, var$3;
    cwtd_App_$callClinit();
    if ($rt_s(300).$equals($page)) {
        var$2 = cwth_DomBuilder$Div_create();
        var$2 = var$2.$child(((cwth_DomBuilder$H4_create()).$text($rt_s(301))).$build());
        var$2 = var$2.$child(((cwth_DomBuilder$P_create()).$text($rt_s(302))).$build());
        var$2 = var$2.$build();
        return var$2;
    }
    if (!$rt_s(303).$equals($page)) {
        var$3 = cwth_DomBuilder$Div_create();
        var$2 = var$3.$child(((cwth_DomBuilder$H4_create()).$text($rt_s(304))).$build());
        var$2 = var$2.$child(((cwth_DomBuilder$P_create()).$text($rt_s(305))).$build());
        var$2 = var$2.$build();
        return var$2;
    }
    var$2 = cwth_DomBuilder$Div_create();
    var$2 = var$2.$child(((cwth_DomBuilder$H4_create()).$text($rt_s(306))).$build());
    var$2 = var$2.$child(((cwth_DomBuilder$P_create()).$text($rt_s(307))).$build());
    var$2 = var$2.$build();
    return var$2;
},
cwtd_App_renderCounterBuilder = $props => {
    let $count, var$3, var$4, var$5, var$6;
    cwtd_App_$callClinit();
    $count = cwth_Hooks_useState0(0);
    var$3 = cwth_DomBuilder$Div_create();
    var$4 = var$3.$child0((cwth_DomBuilder$H3_create()).$text($rt_s(308)));
    var$5 = cwth_DomBuilder$P_create();
    var$6 = $count.$getInt();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(221)), var$6);
    var$4 = var$4.$child0(var$5.$text(jl_StringBuilder_toString(var$3)));
    var$5 = (cwth_DomBuilder$Button_create()).$text($rt_s(222));
    var$3 = cwtd_App$renderCounterBuilder$lambda$_12_0__init_0($count);
    var$5 = var$5.$onClick0(otji_JSWrapper_unwrap(var$3));
    var$4 = var$4.$child0(var$5);
    var$5 = (cwth_DomBuilder$Button_create()).$text($rt_s(223));
    var$3 = cwtd_App$renderCounterBuilder$lambda$_12_1__init_0($count);
    var$5 = var$5.$onClick0(otji_JSWrapper_unwrap(var$3));
    var$4 = var$4.$child0(var$5);
    var$5 = (cwth_DomBuilder$Button_create()).$text($rt_s(214));
    var$3 = cwtd_App$renderCounterBuilder$lambda$_12_2__init_0($count);
    var$5 = var$5.$onClick0(otji_JSWrapper_unwrap(var$3));
    var$4 = var$4.$child0(var$5);
    var$4 = var$4.$build();
    return var$4;
},
cwtd_App_renderItemListBuilder = $props => {
    let $fruits, var$3, $filter, $list, $shown, $i, var$8, var$9, var$10, var$11;
    cwtd_App_$callClinit();
    $fruits = $rt_createArray(jl_String, 7);
    var$3 = $fruits.data;
    var$3[0] = $rt_s(309);
    var$3[1] = $rt_s(310);
    var$3[2] = $rt_s(311);
    var$3[3] = $rt_s(312);
    var$3[4] = $rt_s(313);
    var$3[5] = $rt_s(314);
    var$3[6] = $rt_s(315);
    $filter = cwth_Hooks_useState($rt_s(9));
    $list = cwth_DomBuilder$Ul_create();
    $shown = 0;
    $i = 0;
    while (true) {
        var$8 = var$3.length;
        if ($i >= var$8)
            break;
        a: {
            if (!($filter.$getString0()).$isEmpty()) {
                var$9 = var$3[$i];
                if (!(var$9.$toLowerCase1()).$contains0(($filter.$getString0()).$toLowerCase1()))
                    break a;
            }
            $list.$child0(((cwth_DomBuilder$Li_create()).$key($i)).$text(var$3[$i]));
            $shown = $shown + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    var$9 = cwth_DomBuilder$Div_create();
    var$9 = var$9.$child0((cwth_DomBuilder$H3_create()).$text($rt_s(316)));
    var$10 = (cwth_DomBuilder$Input_create()).$type0($rt_s(271));
    var$10 = var$10.$value0($filter.$getString0());
    var$11 = cwtd_App$renderItemListBuilder$lambda$_13_0__init_0($filter);
    var$10 = var$10.$onChange0(otji_JSWrapper_unwrap(var$11));
    var$10 = var$10.$placeholder0($rt_s(317));
    var$9 = var$9.$child0(var$10);
    var$10 = cwth_DomBuilder$P_create();
    var$11 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$11, $rt_s(318)), $shown), $rt_s(319)), var$8);
    var$9 = var$9.$child0(var$10.$text(jl_StringBuilder_toString(var$11)));
    var$9 = var$9.$child0($list);
    var$9 = var$9.$build();
    return var$9;
},
cwtd_App_renderFormBuilder = $props => {
    let $name, $email, $message, $submitted, var$6, var$7, var$8, var$9;
    cwtd_App_$callClinit();
    $name = cwth_Hooks_useState($rt_s(9));
    $email = cwth_Hooks_useState($rt_s(9));
    $message = cwth_Hooks_useState($rt_s(9));
    $submitted = cwth_Hooks_useState1(0);
    if ($submitted.$getBool()) {
        var$6 = cwth_DomBuilder$Div_create();
        var$6 = var$6.$child0((cwth_DomBuilder$H3_create()).$text($rt_s(320)));
        var$6 = var$6.$child0((cwth_DomBuilder$P_create()).$text($rt_s(321)));
        var$7 = cwth_DomBuilder$Dl_create();
        var$7 = var$7.$child0((cwth_DomBuilder$Dt_create()).$text($rt_s(322)));
        var$7 = var$7.$child0((cwth_DomBuilder$Dd_create()).$text($name.$getString0()));
        var$7 = var$7.$child0((cwth_DomBuilder$Dt_create()).$text($rt_s(323)));
        var$7 = var$7.$child0((cwth_DomBuilder$Dd_create()).$text($email.$getString0()));
        var$7 = var$7.$child0((cwth_DomBuilder$Dt_create()).$text($rt_s(324)));
        var$7 = var$7.$child0((cwth_DomBuilder$Dd_create()).$text($message.$getString0()));
        var$6 = var$6.$child0(var$7);
        var$7 = (cwth_DomBuilder$Button_create()).$text($rt_s(214));
        var$8 = cwtd_App$renderFormBuilder$lambda$_14_4__init_0($submitted);
        var$7 = var$7.$onClick0(otji_JSWrapper_unwrap(var$8));
        var$6 = var$6.$child0(var$7);
        var$6 = var$6.$build();
        return var$6;
    }
    var$8 = cwth_DomBuilder$Div_create();
    var$7 = var$8.$child0((cwth_DomBuilder$H3_create()).$text($rt_s(320)));
    var$8 = (cwth_DomBuilder$Div_create()).$className0($rt_s(325));
    var$8 = var$8.$child0(((cwth_DomBuilder$Label_create()).$text($rt_s(326))).$prop($rt_s(327), $rt_s(328)));
    var$6 = (((cwth_DomBuilder$Input_create()).$type0($rt_s(271))).$prop($rt_s(328), $rt_s(328))).$id($rt_s(328));
    var$9 = var$6.$value0($name.$getString0());
    var$6 = cwtd_App$renderFormBuilder$lambda$_14_0__init_0($name);
    var$6 = var$9.$onChange0(otji_JSWrapper_unwrap(var$6));
    var$6 = var$6.$placeholder0($rt_s(329));
    var$6 = var$8.$child0(var$6);
    var$7 = var$7.$child0(var$6);
    var$6 = (cwth_DomBuilder$Div_create()).$className0($rt_s(325));
    var$8 = var$6.$child0(((cwth_DomBuilder$Label_create()).$text($rt_s(330))).$prop($rt_s(327), $rt_s(331)));
    var$6 = (((cwth_DomBuilder$Input_create()).$type0($rt_s(271))).$prop($rt_s(328), $rt_s(331))).$id($rt_s(331));
    var$9 = var$6.$value0($email.$getString0());
    var$6 = cwtd_App$renderFormBuilder$lambda$_14_1__init_0($email);
    var$6 = var$9.$onChange0(otji_JSWrapper_unwrap(var$6));
    var$6 = var$6.$placeholder0($rt_s(332));
    var$6 = var$8.$child0(var$6);
    var$8 = var$7.$child0(var$6);
    var$6 = (cwth_DomBuilder$Div_create()).$className0($rt_s(325));
    var$9 = var$6.$child0(((cwth_DomBuilder$Label_create()).$text($rt_s(333))).$prop($rt_s(327), $rt_s(334)));
    var$6 = ((cwth_DomBuilder$Textarea_create()).$prop($rt_s(328), $rt_s(334))).$id($rt_s(334));
    var$6 = var$6.$value0($message.$getString0());
    var$7 = cwtd_App$renderFormBuilder$lambda$_14_2__init_0($message);
    var$6 = var$6.$onChange0(otji_JSWrapper_unwrap(var$7));
    var$6 = var$6.$placeholder0($rt_s(335));
    var$6 = var$6.$prop($rt_s(336), $rt_s(337));
    var$6 = var$9.$child0(var$6);
    var$6 = var$8.$child0(var$6);
    var$7 = (cwth_DomBuilder$Button_create()).$text($rt_s(338));
    var$8 = cwtd_App$renderFormBuilder$lambda$_14_3__init_0($submitted);
    var$7 = var$7.$onClick0(otji_JSWrapper_unwrap(var$8));
    var$7 = var$7.$disabled0(!($name.$getString0()).$isEmpty() && !($email.$getString0()).$isEmpty() ? 0 : 1);
    var$6 = var$6.$child0(var$7);
    var$6 = var$6.$build();
    return var$6;
},
cwtd_App_renderUseRefDemo = $props => {
    let $renderCount, $inputValue, var$4, var$5, var$6, var$7, var$8, var$9;
    cwtd_App_$callClinit();
    $renderCount = cwth_Hooks_useRefInt(0);
    $inputValue = cwth_Hooks_useState($rt_s(9));
    $renderCount.$setCurrentInt($renderCount.$getCurrentInt() + 1 | 0);
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(339)));
    var$6 = $renderCount.$getCurrentInt();
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(340)), var$6), $rt_s(341));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_p(jl_StringBuilder_toString(var$7)));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(342)));
    var$8 = cwth_Html_input($rt_s(271));
    var$9 = cwth_ElementBuilder_value(var$8, $inputValue.$getString0());
    var$8 = cwtd_App$renderUseRefDemo$lambda$_15_0__init_0($inputValue);
    var$8 = cwth_ElementBuilder_onChange(var$9, otji_JSWrapper_unwrap(var$8));
    var$8 = cwth_ElementBuilder_placeholder(var$8, $rt_s(343));
    var$5[3] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(var$8));
    return cwth_Html_div(var$4);
},
cwtd_App_renderUseContextDemo = $props => {
    let $theme, $isDark, var$4, var$5, $style, var$7, var$8, var$9, var$10;
    cwtd_App_$callClinit();
    $theme = cwtd_App_THEME_CTX.$useString();
    $isDark = $theme.$equals($rt_s(233));
    var$4 = cwth_Style_create();
    var$4 = var$4.$background(!$isDark ? $rt_s(344) : $rt_s(345));
    var$4 = var$4.$color(!$isDark ? $rt_s(345) : $rt_s(346));
    var$4 = var$4.$padding($rt_s(347));
    var$5 = var$4.$borderRadius($rt_s(348));
    $style = var$5.$set0($rt_s(349), $rt_s(350));
    var$7 = $rt_createArray(jl_Object, 2);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(351)));
    var$9 = (cwth_DomBuilder$Div_create()).$style($style);
    var$10 = cwth_DomBuilder$P_create();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(352)), $theme);
    var$9 = var$9.$child0(var$10.$text(jl_StringBuilder_toString(var$4)));
    var$4 = var$9.$child0((cwth_DomBuilder$P_create()).$text($rt_s(353)));
    var$4 = var$4.$child0((cwth_DomBuilder$P_create()).$text(!$isDark ? $rt_s(354) : $rt_s(355)));
    var$8[1] = otji_JSWrapper_wrap(var$4.$build());
    return cwth_Html_div(var$7);
},
cwtd_App_renderUseMemoDemo = $props => {
    let $number, $dummy, $n, $fib, var$6, var$7, var$8, var$9, var$10, var$11;
    cwtd_App_$callClinit();
    $number = cwth_Hooks_useState0(10);
    $dummy = cwth_Hooks_useState0(0);
    $n = $number.$getInt();
    $fib = cwtd_App_fibonacci($n);
    var$6 = $rt_createArray(jl_Object, 5);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(356)));
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$8, $rt_s(357)), $n), $rt_s(358)), $fib);
    var$8 = jl_StringBuilder_toString(var$8);
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_p(var$8));
    var$9 = $rt_createArray(jl_Object, 2);
    var$10 = var$9.data;
    var$10[0] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(359)), otji_JSWrapper_unwrap(cwtd_App$renderUseMemoDemo$lambda$_17_0__init_0($number)))));
    var$10[1] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(360)), otji_JSWrapper_unwrap(cwtd_App$renderUseMemoDemo$lambda$_17_1__init_0($number)))));
    var$7[2] = otji_JSWrapper_wrap(cwth_Html_div(var$9));
    var$11 = $dummy.$getInt();
    var$8 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$8, $rt_s(361)), var$11);
    var$7[3] = otji_JSWrapper_wrap(cwth_Html_p(jl_StringBuilder_toString(var$8)));
    var$7[4] = otji_JSWrapper_wrap(cwth_ElementBuilder_build(cwth_ElementBuilder_onClick(cwth_Html_button($rt_s(362)), otji_JSWrapper_unwrap(cwtd_App$renderUseMemoDemo$lambda$_17_2__init_0($dummy)))));
    return cwth_Html_div(var$6);
},
cwtd_App_fibonacci = $n => {
    let $a, $b, $i, $tmp_0;
    cwtd_App_$callClinit();
    if ($n <= 1)
        return $n;
    $a = 0;
    $b = 1;
    $i = 2;
    while ($i <= $n) {
        $tmp_0 = $a + $b | 0;
        $i = $i + 1 | 0;
        $a = $b;
        $b = $tmp_0;
    }
    return $b;
},
cwtd_App_renderHtmlElementsDemo = $props => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    cwtd_App_$callClinit();
    var$2 = $rt_createArray(jl_Object, 14);
    var$3 = var$2.data;
    var$3[0] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(363)));
    var$4 = $rt_createArray(jl_Object, 7);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(364)));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_h1($rt_s(365)));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_h2($rt_s(366)));
    var$5[3] = otji_JSWrapper_wrap(cwth_Html_h3($rt_s(367)));
    var$5[4] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(368)));
    var$5[5] = otji_JSWrapper_wrap(cwth_Html_h5($rt_s(369)));
    var$5[6] = otji_JSWrapper_wrap(cwth_Html_h6($rt_s(370)));
    var$3[1] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[2] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(371)));
    var$6 = $rt_createArray(jl_Object, 11);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap("This has ");
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_em($rt_s(372)));
    var$7[2] = otji_JSWrapper_wrap(", ");
    var$7[3] = otji_JSWrapper_wrap(cwth_Html_strong($rt_s(373)));
    var$7[4] = otji_JSWrapper_wrap(", ");
    var$7[5] = otji_JSWrapper_wrap(cwth_Html_small($rt_s(374)));
    var$7[6] = otji_JSWrapper_wrap(", ");
    var$7[7] = otji_JSWrapper_wrap(cwth_Html_code($rt_s(375)));
    var$7[8] = otji_JSWrapper_wrap(", and ");
    var$7[9] = otji_JSWrapper_wrap(cwth_Html_mark($rt_s(376)));
    var$7[10] = otji_JSWrapper_wrap(" text.");
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_p0(var$6));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_blockquote($rt_s(377)));
    var$5[3] = otji_JSWrapper_wrap(cwth_Html_pre($rt_s(378)));
    var$3[3] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[4] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 4);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(379)));
    var$6 = $rt_createArray(jl_Object, 2);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_strong($rt_s(380)));
    var$8 = $rt_createArray(jl_Object, 3);
    var$9 = var$8.data;
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(381)));
    var$9[1] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(382)));
    var$9[2] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(383)));
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_ul(var$8));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_div(var$6));
    var$6 = $rt_createArray(jl_Object, 2);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_strong($rt_s(384)));
    var$8 = $rt_createArray(jl_Object, 3);
    var$9 = var$8.data;
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(385)));
    var$9[1] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(386)));
    var$9[2] = otji_JSWrapper_wrap(cwth_Html_li($rt_s(387)));
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_ol(var$8));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_div(var$6));
    var$6 = $rt_createArray(jl_Object, 2);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_strong($rt_s(388)));
    var$8 = $rt_createArray(jl_Object, 6);
    var$9 = var$8.data;
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_dt($rt_s(389)));
    var$9[1] = otji_JSWrapper_wrap(cwth_Html_dd($rt_s(390)));
    var$9[2] = otji_JSWrapper_wrap(cwth_Html_dt($rt_s(391)));
    var$9[3] = otji_JSWrapper_wrap(cwth_Html_dd($rt_s(392)));
    var$9[4] = otji_JSWrapper_wrap(cwth_Html_dt($rt_s(393)));
    var$9[5] = otji_JSWrapper_wrap(cwth_Html_dd($rt_s(394)));
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_dl(var$8));
    var$5[3] = otji_JSWrapper_wrap(cwth_Html_div(var$6));
    var$3[5] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[6] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 2);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(395)));
    var$6 = $rt_createArray(jl_Object, 2);
    var$10 = var$6.data;
    var$7 = $rt_createArray(jl_Object, 1);
    var$11 = var$7.data;
    var$8 = $rt_createArray(jl_Object, 4);
    var$9 = var$8.data;
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_th($rt_s(396)));
    var$9[1] = otji_JSWrapper_wrap(cwth_Html_th($rt_s(397)));
    var$9[2] = otji_JSWrapper_wrap(cwth_Html_th($rt_s(398)));
    var$9[3] = otji_JSWrapper_wrap(cwth_Html_th($rt_s(399)));
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_tr(var$8));
    var$10[0] = otji_JSWrapper_wrap(cwth_Html_thead(var$7));
    var$7 = $rt_createArray(jl_Object, 4);
    var$8 = var$7.data;
    var$9 = $rt_createArray(jl_Object, 4);
    var$11 = var$9.data;
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(400)));
    var$11[1] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(401)));
    var$11[2] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(402)));
    var$11[3] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(403)));
    var$8[0] = otji_JSWrapper_wrap(cwth_Html_tr(var$9));
    var$9 = $rt_createArray(jl_Object, 4);
    var$11 = var$9.data;
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(404)));
    var$11[1] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(405)));
    var$11[2] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(406)));
    var$11[3] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(407)));
    var$8[1] = otji_JSWrapper_wrap(cwth_Html_tr(var$9));
    var$9 = $rt_createArray(jl_Object, 4);
    var$11 = var$9.data;
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(408)));
    var$11[1] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(409)));
    var$11[2] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(409)));
    var$11[3] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(410)));
    var$8[2] = otji_JSWrapper_wrap(cwth_Html_tr(var$9));
    var$9 = $rt_createArray(jl_Object, 4);
    var$11 = var$9.data;
    var$11[0] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(411)));
    var$11[1] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(412)));
    var$11[2] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(412)));
    var$11[3] = otji_JSWrapper_wrap(cwth_Html_td($rt_s(413)));
    var$8[3] = otji_JSWrapper_wrap(cwth_Html_tr(var$9));
    var$10[1] = otji_JSWrapper_wrap(cwth_Html_tbody(var$7));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_table(var$6));
    var$3[7] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[8] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 2);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(414)));
    var$6 = $rt_createArray(jl_Object, 3);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_summary($rt_s(415)));
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(416)));
    var$7[2] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(417)));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_details(var$6));
    var$3[9] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[10] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 2);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(418)));
    var$6 = $rt_createArray(jl_Object, 3);
    var$9 = var$6.data;
    var$7 = $rt_createArray(jl_Object, 1);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap(cwth_Html_h5($rt_s(419)));
    var$9[0] = otji_JSWrapper_wrap(cwth_Html_header(var$7));
    var$9[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(420)));
    var$7 = $rt_createArray(jl_Object, 1);
    var$8 = var$7.data;
    var$8[0] = otji_JSWrapper_wrap(cwth_Html_small($rt_s(421)));
    var$9[2] = otji_JSWrapper_wrap(cwth_Html_footer(var$7));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_article(var$6));
    var$3[11] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    var$3[12] = otji_JSWrapper_wrap(cwth_Html_hr());
    var$4 = $rt_createArray(jl_Object, 3);
    var$5 = var$4.data;
    var$5[0] = otji_JSWrapper_wrap(cwth_Html_h4($rt_s(422)));
    var$5[1] = otji_JSWrapper_wrap(cwth_Html_p($rt_s(423)));
    var$6 = $rt_createArray(jl_Object, 3);
    var$7 = var$6.data;
    var$7[0] = otji_JSWrapper_wrap(cwth_Html_span($rt_s(424)));
    var$7[1] = otji_JSWrapper_wrap(cwth_Html_span($rt_s(425)));
    var$7[2] = otji_JSWrapper_wrap(cwth_Html_span($rt_s(426)));
    var$5[2] = otji_JSWrapper_wrap(cwth_Html_fragment(var$6));
    var$3[13] = otji_JSWrapper_wrap(cwth_Html_div(var$4));
    return cwth_Html_div(var$2);
},
cwtd_App_lambda$renderUseMemoDemo$44 = ($dummy, $e) => {
    cwtd_App_$callClinit();
    $dummy.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0__init_0()));
},
cwtd_App_lambda$renderUseMemoDemo$43 = $d => {
    cwtd_App_$callClinit();
    return $d + 1 | 0;
},
cwtd_App_lambda$renderUseMemoDemo$42 = ($number, $e) => {
    cwtd_App_$callClinit();
    if ($number.$getInt() < 40)
        $number.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0__init_0()));
},
cwtd_App_lambda$renderUseMemoDemo$41 = $x => {
    cwtd_App_$callClinit();
    return $x + 1 | 0;
},
cwtd_App_lambda$renderUseMemoDemo$40 = ($number, $e) => {
    cwtd_App_$callClinit();
    if ($number.$getInt() > 0)
        $number.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0__init_0()));
},
cwtd_App_lambda$renderUseMemoDemo$39 = $x => {
    cwtd_App_$callClinit();
    return $x - 1 | 0;
},
cwtd_App_lambda$renderUseRefDemo$38 = ($inputValue, $e) => {
    cwtd_App_$callClinit();
    $inputValue.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderFormBuilder$37 = ($submitted, $e) => {
    cwtd_App_$callClinit();
    $submitted.$setBool(1);
},
cwtd_App_lambda$renderFormBuilder$36 = ($message, $e) => {
    cwtd_App_$callClinit();
    $message.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderFormBuilder$35 = ($email, $e) => {
    cwtd_App_$callClinit();
    $email.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderFormBuilder$34 = ($name, $e) => {
    cwtd_App_$callClinit();
    $name.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderFormBuilder$33 = ($submitted, $e) => {
    cwtd_App_$callClinit();
    $submitted.$setBool(0);
},
cwtd_App_lambda$renderItemListBuilder$32 = ($filter, $e) => {
    cwtd_App_$callClinit();
    $filter.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderCounterBuilder$31 = ($count, $e) => {
    cwtd_App_$callClinit();
    $count.$setInt(0);
},
cwtd_App_lambda$renderCounterBuilder$30 = ($count, $e) => {
    cwtd_App_$callClinit();
    $count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0__init_0()));
},
cwtd_App_lambda$renderCounterBuilder$29 = $c => {
    cwtd_App_$callClinit();
    return $c - 1 | 0;
},
cwtd_App_lambda$renderCounterBuilder$28 = ($count, $e) => {
    cwtd_App_$callClinit();
    $count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0__init_0()));
},
cwtd_App_lambda$renderCounterBuilder$27 = $c => {
    cwtd_App_$callClinit();
    return $c + 1 | 0;
},
cwtd_App_lambda$renderPageNavigationBuilder$26 = ($currentPage, $e) => {
    cwtd_App_$callClinit();
    $currentPage.$setString($rt_s(303));
},
cwtd_App_lambda$renderPageNavigationBuilder$25 = ($currentPage, $e) => {
    cwtd_App_$callClinit();
    $currentPage.$setString($rt_s(300));
},
cwtd_App_lambda$renderPageNavigationBuilder$24 = ($currentPage, $e) => {
    cwtd_App_$callClinit();
    $currentPage.$setString($rt_s(290));
},
cwtd_App_lambda$addTodo$23 = $n => {
    cwtd_App_$callClinit();
    return $n + 1 | 0;
},
cwtd_App_lambda$renderTodoListFunctional$22 = ($input, $todoIds, $todoTexts, $todoDone, $nextId, $e) => {
    cwtd_App_$callClinit();
    if (!($input.$getString0()).$isEmpty())
        cwtd_App_addTodo($todoIds, $todoTexts, $todoDone, $nextId, $input);
},
cwtd_App_lambda$renderTodoListFunctional$21 = ($input, $todoIds, $todoTexts, $todoDone, $nextId, $e) => {
    cwtd_App_$callClinit();
    if ($rt_str($e.key).$equals($rt_s(427)) && !($input.$getString0()).$isEmpty())
        cwtd_App_addTodo($todoIds, $todoTexts, $todoDone, $nextId, $input);
},
cwtd_App_lambda$renderTodoListFunctional$20 = ($input, $e) => {
    cwtd_App_$callClinit();
    $input.$setString($rt_str($e.target.value));
};
let cwtd_App_lambda$renderTodoListFunctional$19 = ($todoIds, $todoTexts, $todoDone, $idx, $e) => {
    let $ci, $ct, $cd;
    cwtd_App_$callClinit();
    $ci = ($todoIds.$getString0()).$split($rt_s(280));
    $ct = ($todoTexts.$getString0()).$split($rt_s(280));
    $cd = ($todoDone.$getString0()).$split($rt_s(280));
    $todoIds.$setString(cwtd_App_removeAt($ci, $idx));
    $todoTexts.$setString(cwtd_App_removeAt($ct, $idx));
    $todoDone.$setString(cwtd_App_removeAt($cd, $idx));
},
cwtd_App_lambda$renderTodoListFunctional$18 = ($todoDone, $idx, $e) => {
    let $d, var$5;
    cwtd_App_$callClinit();
    $d = ($todoDone.$getString0()).$split($rt_s(280));
    var$5 = $d.data;
    var$5[$idx] = !var$5[$idx].$equals($rt_s(281)) ? $rt_s(281) : $rt_s(289);
    $todoDone.$setString(cwtd_App_joinArray($d));
},
cwtd_App_lambda$renderTextInputFunctional$17 = ($focused, $e) => {
    cwtd_App_$callClinit();
    $focused.$setBool(0);
},
cwtd_App_lambda$renderTextInputFunctional$16 = ($focused, $e) => {
    cwtd_App_$callClinit();
    $focused.$setBool(1);
},
cwtd_App_lambda$renderTextInputFunctional$15 = ($value, $e) => {
    cwtd_App_$callClinit();
    $value.$setString($rt_str($e.target.value));
},
cwtd_App_lambda$renderTimerFunctional$14 = ($seconds, $running, $e) => {
    cwtd_App_$callClinit();
    $seconds.$setInt(0);
    $running.$setBool(1);
},
cwtd_App_lambda$renderTimerFunctional$13 = ($running, $e) => {
    cwtd_App_$callClinit();
    $running.$setBool($running.$getBool() ? 0 : 1);
},
cwtd_App_lambda$renderTimerFunctional$12 = ($running, $seconds) => {
    let $id;
    cwtd_App_$callClinit();
    if (!$running.$getBool())
        return null;
    $id = setInterval(otji_JS_function(otji_JSWrapper_unwrap(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0__init_0($seconds)), "call"), 1000);
    return otji_JSWrapper_unwrap(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1__init_0($id));
},
cwtd_App_lambda$renderTimerFunctional$11 = $id => {
    cwtd_App_$callClinit();
    clearInterval($id);
},
cwtd_App_lambda$renderTimerFunctional$10 = $seconds => {
    cwtd_App_$callClinit();
    $seconds.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0__init_0()));
},
cwtd_App_lambda$renderTimerFunctional$9 = $s => {
    cwtd_App_$callClinit();
    return $s + 1 | 0;
},
cwtd_App_lambda$renderCounterFunctional$8 = ($step, $e) => {
    cwtd_App_$callClinit();
    $step.$setInt(10);
},
cwtd_App_lambda$renderCounterFunctional$7 = ($step, $e) => {
    cwtd_App_$callClinit();
    $step.$setInt(5);
},
cwtd_App_lambda$renderCounterFunctional$6 = ($step, $e) => {
    cwtd_App_$callClinit();
    $step.$setInt(1);
},
cwtd_App_lambda$renderCounterFunctional$5 = ($count, $e) => {
    cwtd_App_$callClinit();
    $count.$setInt(0);
},
cwtd_App_lambda$renderCounterFunctional$4 = ($count, $step, $e) => {
    cwtd_App_$callClinit();
    $count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0__init_0($step)));
},
cwtd_App_lambda$renderCounterFunctional$3 = ($step, $c) => {
    cwtd_App_$callClinit();
    return $c + $step.$getInt() | 0;
},
cwtd_App_lambda$renderCounterFunctional$2 = ($count, $step, $e) => {
    cwtd_App_$callClinit();
    $count.$updateInt(otji_JSWrapper_unwrap(cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0__init_0($step)));
},
cwtd_App_lambda$renderCounterFunctional$1 = ($step, $c) => {
    cwtd_App_$callClinit();
    return $c - $step.$getInt() | 0;
},
cwtd_App_lambda$renderApp$0 = ($theme, $isDark, $e) => {
    cwtd_App_$callClinit();
    $theme.$setString(!$isDark ? $rt_s(233) : $rt_s(232));
},
cwtd_App__clinit_ = () => {
    cwtd_App_THEME_CTX = cwtc_ReactContext_create($rt_s(232));
};
function jur_CharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$cc3 = null;
    a.$this$07 = null;
}
let jur_CharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$07 = $this$0;
    $this.$val$cc3 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$1();
    jur_CharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$1_contains = ($this, $ch) => {
    return $this.$val$cc3.$contains($ch);
};
function jur_CharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$cc1 = null;
    a.$this$00 = null;
}
let jur_CharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$00 = $this$0;
    $this.$val$curAlt0 = var$2;
    $this.$val$cc1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$2();
    jur_CharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$2_contains = ($this, $ch) => {
    return !($this.$val$curAlt0 ^ $this.$this$00.$bits.$get0($ch)) && !($this.$val$curAlt0 ^ $this.$this$00.$inverted ^ $this.$val$cc1.$contains($ch)) ? 1 : 0;
};
function jur_AbstractCharClass$LazyRange() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start4 = 0;
    a.$end2 = 0;
}
let jur_AbstractCharClass$LazyRange__init_0 = ($this, $start, $end) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$start4 = $start;
    $this.$end2 = $end;
},
jur_AbstractCharClass$LazyRange__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyRange_computeValue = $this => {
    let $chCl;
    $chCl = (jur_CharClass__init_()).$add0($this.$start4, $this.$end2);
    return $chCl;
};
function jur_CharClass$7() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz7 = null;
    a.$this$032 = null;
}
let jur_CharClass$7__init_ = ($this, $this$0, var$2) => {
    $this.$this$032 = $this$0;
    $this.$val$clazz7 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$7__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$7();
    jur_CharClass$7__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$7_contains = ($this, $ch) => {
    return $this.$val$clazz7.$contains($ch);
},
jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyXDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyXDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyXDigit_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(48, 57)).$add0(97, 102)).$add0(65, 70);
};
function jur_CharClass$8() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$val$curAlt2 = 0;
    a.$this$02 = null;
}
let jur_CharClass$8__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$02 = $this$0;
    $this.$val$clazz1 = var$2;
    $this.$val$curAlt2 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$8__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$8();
    jur_CharClass$8__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$8_contains = ($this, $ch) => {
    return !$this.$val$clazz1.$contains($ch) && !($this.$val$curAlt2 ^ $this.$this$02.$bits.$get0($ch)) ? 1 : 0;
};
function jur_CharClass$5() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$cc0 = null;
    a.$this$017 = null;
}
let jur_CharClass$5__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$017 = $this$0;
    $this.$val$curAlt7 = var$2;
    $this.$val$nb3 = var$3;
    $this.$val$cc0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$5__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$5();
    jur_CharClass$5__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$5_contains = ($this, $ch) => {
    return $this.$val$curAlt7 ^ (!$this.$val$nb3.$contains($ch) && !$this.$val$cc0.$contains($ch) ? 0 : 1);
};
function jur_CharClass$6() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz6 = null;
    a.$this$019 = null;
}
let jur_CharClass$6__init_ = ($this, $this$0, var$2) => {
    $this.$this$019 = $this$0;
    $this.$val$clazz6 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$6__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$6();
    jur_CharClass$6__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$6_contains = ($this, $ch) => {
    return $this.$val$clazz6.$contains($ch) ? 0 : 1;
},
cwtd_App$renderApp$lambda$_2_9 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_9__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_9__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_9();
    cwtd_App$renderApp$lambda$_2_9__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_9_create = var$0 => {
    return cwtd_App$CounterView__init_0();
},
cwtd_App$renderApp$lambda$_2_8 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_8__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_8__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_8();
    cwtd_App$renderApp$lambda$_2_8__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_8_render = (var$0, var$1) => {
    return cwtd_App_renderFormBuilder(var$1);
},
cwtd_App$renderApp$lambda$_2_8_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt0 = null;
}
let jur_DotSet__init_ = ($this, $lt) => {
    jur_JointSet__init_($this);
    $this.$lt0 = $lt;
},
jur_DotSet__init_0 = var_0 => {
    let var_1 = new jur_DotSet();
    jur_DotSet__init_(var_1, var_0);
    return var_1;
},
jur_DotSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        var$7 = $stringIndex + 2 | 0;
        if (var$7 <= $strLength) {
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$lt0.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next1.$matches(var$7, $testString, $matchResult);
        }
    }
    return $this.$lt0.$isLineTerminator($high) ? (-1) : $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotSet_getType = $this => {
    return (-2147483602);
},
jur_DotSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CharClass$9() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz = null;
    a.$val$curAlt8 = 0;
    a.$this$04 = null;
}
let jur_CharClass$9__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$04 = $this$0;
    $this.$val$clazz = var$2;
    $this.$val$curAlt8 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$9__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$9();
    jur_CharClass$9__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$9_contains = ($this, $ch) => {
    return !$this.$val$clazz.$contains($ch) && !($this.$val$curAlt8 ^ $this.$this$04.$bits.$get0($ch)) ? 0 : 1;
};
function jur_Matcher() {
    let a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start3 = null;
    a.$string0 = null;
    a.$matchResult = null;
    a.$leftBound = 0;
    a.$rightBound = 0;
}
let jur_Matcher_find = ($this, $start) => {
    let $stringLength, var$3;
    $stringLength = $this.$string0.$length();
    if ($start >= 0 && $start <= $stringLength) {
        var$3 = jur_Matcher_findAt($this, $start);
        if (var$3 >= 0 && $this.$matchResult.$isValid()) {
            $this.$matchResult.$finalizeMatch();
            return 1;
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_1(jl_String_valueOf0($start)));
},
jur_Matcher_findAt = ($this, $startIndex) => {
    let $foundIndex;
    $this.$matchResult.$reset0();
    $this.$matchResult.$setMode(1);
    $this.$matchResult.$setStartIndex($startIndex);
    $foundIndex = $this.$start3.$find($startIndex, $this.$string0, $this.$matchResult);
    if ($foundIndex == (-1))
        $this.$matchResult.$hitEnd = 1;
    return $foundIndex;
},
jur_Matcher_find0 = $this => {
    let $length, var$2;
    $length = $this.$string0.$length();
    if (!jur_Matcher_hasTransparentBounds($this))
        $length = $this.$rightBound;
    if ($this.$matchResult.$startIndex >= 0 && $this.$matchResult.$mode() == 1) {
        $this.$matchResult.$startIndex = $this.$matchResult.$end0();
        if ($this.$matchResult.$end0() == $this.$matchResult.$start0()) {
            var$2 = $this.$matchResult;
            var$2.$startIndex = var$2.$startIndex + 1 | 0;
        }
        return $this.$matchResult.$startIndex <= $length && jur_Matcher_find($this, $this.$matchResult.$startIndex) ? 1 : 0;
    }
    return jur_Matcher_find($this, $this.$leftBound);
},
jur_Matcher_start0 = ($this, $group) => {
    return $this.$matchResult.$start($group);
},
jur_Matcher_end = ($this, $group) => {
    return $this.$matchResult.$end($group);
},
jur_Matcher_start = $this => {
    return jur_Matcher_start0($this, 0);
},
jur_Matcher_end0 = $this => {
    return jur_Matcher_end($this, 0);
},
jur_Matcher_hasTransparentBounds = $this => {
    return $this.$matchResult.$hasTransparentBounds();
},
jur_Matcher__init_ = ($this, $pat, $cs) => {
    let var$3, var$4, var$5, var$6, var$7;
    jl_Object__init_($this);
    $this.$leftBound = (-1);
    $this.$rightBound = (-1);
    $this.$pat = $pat;
    $this.$start3 = $pat.$start1;
    $this.$string0 = $cs;
    $this.$leftBound = 0;
    $this.$rightBound = $this.$string0.$length();
    var$3 = new jur_MatchResultImpl;
    var$4 = $this.$leftBound;
    var$5 = $this.$rightBound;
    var$6 = jur_Pattern_groupCount($pat);
    var$7 = jur_Pattern_compCount($pat);
    jur_MatchResultImpl__init_(var$3, $cs, var$4, var$5, var$6, var$7, jur_Pattern_consCount($pat));
    $this.$matchResult = var$3;
    $this.$matchResult.$useAnchoringBounds(1);
},
jur_Matcher__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Matcher();
    jur_Matcher__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_upperCaseMapping = null,
jl_Character_lowerCaseMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$0 = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_toString = $c => {
    let var$2, var$3;
    jl_Character_$callClinit();
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_0(var$2, var$3);
    return var$2;
},
jl_Character_isValidCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint >= 0 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isBmpCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint > 0 && $codePoint <= 65535 ? 1 : 0;
},
jl_Character_isSupplementaryCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint >= 65536 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isHighSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogate = $ch => {
    jl_Character_$callClinit();
    return !jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1;
},
jl_Character_isSurrogatePair = ($high, $low) => {
    jl_Character_$callClinit();
    return jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low) ? 1 : 0;
},
jl_Character_toCodePoint = ($high, $low) => {
    jl_Character_$callClinit();
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
},
jl_Character_codePointAt = ($a, $index) => {
    jl_Character_$callClinit();
    return jl_Character_codePointAt0($a, $index, $a.data.length);
},
jl_Character_codePointAt0 = ($a, $index, $limit) => {
    let var$4, var$5;
    jl_Character_$callClinit();
    if ($index < $limit && $index >= 0) {
        var$4 = $a.data;
        if ($limit <= var$4.length) {
            if ($index < ($limit - 1 | 0) && jl_Character_isHighSurrogate(var$4[$index])) {
                var$5 = $index + 1 | 0;
                if (jl_Character_isLowSurrogate(var$4[var$5]))
                    return jl_Character_toCodePoint(var$4[$index], var$4[var$5]);
            }
            return var$4[$index];
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_Character_highSurrogate = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    var$2 = $codePoint - 65536 | 0;
    return (55296 | var$2 >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_toLowerCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toLowerCase0($ch) & 65535;
},
jl_Character_toLowerCase0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getLowerCaseMapping(), $ch);
},
jl_Character_getLowerCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_lowerCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireLowerCaseMapping()).value !== null ? $rt_str((jl_Character_acquireLowerCaseMapping()).value) : null));
        jl_Character_lowerCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_lowerCaseMapping;
},
jl_Character_acquireLowerCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$0 === null)
        jl_Character_$$metadata$$0 = jl_Character_acquireLowerCaseMapping$$create();
    return jl_Character_$$metadata$$0;
},
jl_Character_toUpperCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getUpperCaseMapping(), $codePoint);
},
jl_Character_getUpperCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_upperCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireUpperCaseMapping()).value !== null ? $rt_str((jl_Character_acquireUpperCaseMapping()).value) : null));
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_upperCaseMapping;
},
jl_Character_acquireUpperCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$1 === null)
        jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
    return jl_Character_$$metadata$$1;
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, $index, var$5, var$6;
    jl_Character_$callClinit();
    if ($codePoint < $table.$fastTable.data.length)
        return $codePoint + $table.$fastTable.data[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable0;
    $index = jl_Character_binarySearchTable($binSearchTable, $codePoint);
    if ($index >= 0) {
        var$5 = $binSearchTable.data;
        var$6 = $index * 2 | 0;
        if (var$6 < var$5.length)
            return $codePoint + var$5[var$6 + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_binarySearchTable = ($data, $key) => {
    let var$3, $l, $u, $i, $e, var$8;
    jl_Character_$callClinit();
    var$3 = $data.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while (true) {
        $i = ($l + $u | 0) / 2 | 0;
        $e = var$3[$i * 2 | 0];
        var$8 = $rt_compare($e, $key);
        if (!var$8)
            break;
        if (var$8 <= 0) {
            $l = $i + 1 | 0;
            if ($l > $u)
                return $i;
        } else {
            $u = $i - 1 | 0;
            if ($u < $l)
                return $u;
        }
    }
    return $i;
},
jl_Character_digit = ($ch, $radix) => {
    jl_Character_$callClinit();
    return jl_Character_digit0($ch, $radix);
},
jl_Character_digit0 = ($codePoint, $radix) => {
    let $d;
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36) {
        $d = jl_Character_getNumericValue($codePoint);
        if ($d >= $radix)
            $d = (-1);
        return $d;
    }
    return (-1);
},
jl_Character_getNumericValue = $codePoint => {
    let $digitMapping, var$3, $l, $u, $idx, var$7, $val, var$9;
    jl_Character_$callClinit();
    $digitMapping = jl_Character_getDigitMapping();
    var$3 = $digitMapping.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while ($u >= $l) {
        $idx = ($l + $u | 0) / 2 | 0;
        var$7 = $idx * 2 | 0;
        $val = var$3[var$7];
        var$9 = $rt_compare($codePoint, $val);
        if (var$9 > 0)
            $l = $idx + 1 | 0;
        else {
            if (var$9 >= 0)
                return var$3[var$7 + 1 | 0];
            $u = $idx - 1 | 0;
        }
    }
    return (-1);
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_isDigit = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 9 ? 0 : 1;
};
let jl_Character_getDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_digitMapping === null)
        jl_Character_digitMapping = otciu_UnicodeHelper_decodeIntPairsDiff(((jl_Character_obtainDigitMapping()).value !== null ? $rt_str((jl_Character_obtainDigitMapping()).value) : null));
    return jl_Character_digitMapping;
},
jl_Character_obtainDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$3 === null)
        jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
    return jl_Character_$$metadata$$3;
},
jl_Character_getClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_classMapping === null)
        jl_Character_classMapping = otciu_UnicodeHelper_extractRle(((jl_Character_obtainClasses()).value !== null ? $rt_str((jl_Character_obtainClasses()).value) : null));
    return jl_Character_classMapping;
},
jl_Character_obtainClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$4 === null)
        jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
    return jl_Character_$$metadata$$4;
},
jl_Character_toChars = $codePoint => {
    let var$2, var$3;
    jl_Character_$callClinit();
    if (!jl_Character_isValidCodePoint($codePoint))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($codePoint < 65536) {
        var$2 = $rt_createCharArray(1);
        var$2.data[0] = $codePoint & 65535;
        return var$2;
    }
    var$2 = $rt_createCharArray(2);
    var$3 = var$2.data;
    var$3[0] = jl_Character_highSurrogate($codePoint);
    var$3[1] = jl_Character_lowSurrogate($codePoint);
    return var$2;
},
jl_Character_isISOControl = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    a: {
        b: {
            if (!($codePoint >= 0 && $codePoint <= 31)) {
                if ($codePoint < 127)
                    break b;
                if ($codePoint > 159)
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jl_Character_getType0 = $c => {
    jl_Character_$callClinit();
    return jl_Character_getType($c);
},
jl_Character_getType = $codePoint => {
    let $classes, var$3, $l, $u, $i, $range;
    jl_Character_$callClinit();
    if (jl_Character_isBmpCodePoint($codePoint) && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    $classes = jl_Character_getClasses();
    var$3 = $classes.data;
    $l = 0;
    $u = var$3.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = var$3[$i];
        if ($codePoint >= $range.$end1)
            $l = $i + 1 | 0;
        else {
            if ($codePoint >= $range.$start2)
                return $range.$data0.data[$codePoint - $range.$start2 | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isLowerCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 2 ? 0 : 1;
},
jl_Character_isUpperCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 1 ? 0 : 1;
},
jl_Character_isTitleCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 3 ? 0 : 1;
},
jl_Character_isDefined = $codePoint => {
    jl_Character_$callClinit();
    return !jl_Character_getType($codePoint) ? 0 : 1;
},
jl_Character_isLetter = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isLetterOrDigit0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isLetterOrDigit($ch);
},
jl_Character_isLetterOrDigit = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
},
jl_Character_isJavaIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
            case 23:
            case 26:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isJavaIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
            case 26:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isIdentifierIgnorable = $codePoint => {
    jl_Character_$callClinit();
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
},
jl_Character_isSpaceChar = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isWhitespace($ch);
},
jl_Character_isWhitespace = $codePoint => {
    jl_Character_$callClinit();
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireLowerCaseMapping$$create = () => {
    return {"value" : "TW  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# \'%# +%# #%# #%# #P6rM \'%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b Jo=N#f "};
},
jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "NY  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'"
    + "# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'#"
    + " #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'\' #\'% )\'# #\'# #\'# U\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b No=P#f "};
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "kE*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%"
    + "%%%%:OG%%%%%%%%%%%%%%%%%%V*OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
    + "!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
    + " F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
    + "L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
    + "FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0"
    + "G.H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?6767676"
    + "7Y&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##A#!# # #!#!#!#!A6E$!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F"
    + "\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$AXG%F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'"
    + "F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%"
    + "Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W# FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+b \'$ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AJF#A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+A\'b=U\'"
    + " AnGOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b A( F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% "
    + "F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^-A%^#A`b=5& A-^/A#^.A$^+A&^YA(^0A#^,A\'^*A(b=4#  b==! J+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};
},
cwtd_App$renderApp$lambda$_2_5 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_5__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_5__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_5();
    cwtd_App$renderApp$lambda$_2_5__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_5_render = (var$0, var$1) => {
    return cwtd_App_renderPageNavigationBuilder(var$1);
},
cwtd_App$renderApp$lambda$_2_5_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function cwtc_ReactView$toComponent$lambda$_6_0() {
    jl_Object.call(this);
    this.$_044 = null;
}
let cwtc_ReactView$toComponent$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_044 = var$1;
},
cwtc_ReactView$toComponent$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cwtc_ReactView$toComponent$lambda$_6_0();
    cwtc_ReactView$toComponent$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cwtc_ReactView$toComponent$lambda$_6_0_render = (var$0, var$1) => {
    return cwtc_ReactView_lambda$toComponent$1(var$0.$_044, var$1);
},
cwtc_ReactView$toComponent$lambda$_6_0_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
jur_DotAllSet = $rt_classWithoutFields(jur_JointSet),
jur_DotAllSet__init_ = $this => {
    jur_JointSet__init_($this);
},
jur_DotAllSet__init_0 = () => {
    let var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_(var_0);
    return var_0;
},
jur_DotAllSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        var$7 = $stringIndex + 2 | 0;
        if (var$7 <= $strLength) {
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$next1.$matches(var$7, $testString, $matchResult);
        }
    }
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotAllSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotAllSet_getType = $this => {
    return (-2147483602);
},
jur_DotAllSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
cwtd_App$renderApp$lambda$_2_4 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_4__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_4__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_4();
    cwtd_App$renderApp$lambda$_2_4__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_4_render = (var$0, var$1) => {
    return cwtd_App_renderTodoListFunctional(var$1);
},
cwtd_App$renderApp$lambda$_2_4_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function jur_CICharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$ch3 = 0;
    a.$supplement = 0;
}
let jur_CICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch3 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
},
jur_CICharSet__init_ = var_0 => {
    let var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch3 != $testString.$charAt($strIndex) && $this.$supplement != $testString.$charAt($strIndex) ? (-1) : 1;
};
function jur_SupplCharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$high0 = 0;
    a.$low0 = 0;
    a.$ch1 = 0;
}
let jur_SupplCharSet__init_ = ($this, $ch) => {
    let $chUTF16, var$3;
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch1 = $ch;
    $chUTF16 = jl_Character_toChars($ch);
    var$3 = $chUTF16.data;
    $this.$high0 = var$3[0];
    $this.$low0 = var$3[1];
},
jur_SupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_SupplCharSet();
    jur_SupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return $this.$high0 == $high && $this.$low0 == $low ? 2 : (-1);
},
jur_SupplCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, $ch;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while ($strIndex < $strLength) {
        var$6 = $testStr.$indexOf1($this.$high0, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex >= $strLength)
            continue;
        $ch = $testStr.$charAt($strIndex);
        if ($this.$low0 == $ch && $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
            return $strIndex + (-1) | 0;
        $strIndex = $strIndex + 1 | 0;
    }
    return (-1);
},
jur_SupplCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = $testStr.$lastIndexOf1($this.$low0, $lastIndex);
            var$7 = var$6 + (-1) | 0;
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$high0 == $testStr.$charAt(var$7) && $this.$next1.$matches(var$7 + 2 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_SupplCharSet_getCodePoint = $this => {
    return $this.$ch1;
},
jur_SupplCharSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return $set.$getCodePoint() != $this.$ch1 ? 0 : 1;
    if ($set instanceof jur_SupplRangeSet)
        return $set.$contains($this.$ch1);
    if ($set instanceof jur_CharSet)
        return 0;
    if (!($set instanceof jur_RangeSet))
        return 1;
    return 0;
};
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$034 = null;
}
let jur_AbstractCharClass$LazyJavaLowerCase$1__init_ = ($this, $this$0) => {
    $this.$this$034 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLowerCase$1();
    jur_AbstractCharClass$LazyJavaLowerCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLowerCase$1_contains = ($this, $ch) => {
    return jl_Character_isLowerCase($ch);
},
cwtd_App$renderApp$lambda$_2_7 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_7__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_7__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_7();
    cwtd_App$renderApp$lambda$_2_7__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_7_render = (var$0, var$1) => {
    return cwtd_App_renderItemListBuilder(var$1);
},
cwtd_App$renderApp$lambda$_2_7_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
cwtd_App$renderApp$lambda$_2_6 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_6__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_6__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_6();
    cwtd_App$renderApp$lambda$_2_6__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_6_render = (var$0, var$1) => {
    return cwtd_App_renderCounterBuilder(var$1);
},
cwtd_App$renderApp$lambda$_2_6_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
cwtd_App$renderApp$lambda$_2_1 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_1__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_1();
    cwtd_App$renderApp$lambda$_2_1__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_1_render = (var$0, var$1) => {
    return cwtd_App_renderCounterFunctional(var$1);
},
cwtd_App$renderApp$lambda$_2_1_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0() {
    jl_Object.call(this);
    this.$_023 = null;
}
let cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_023 = var$1;
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0();
    cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0_call = var$0 => {
    cwtd_App$StopwatchView_lambda$render$1(var$0.$_023);
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function cwtd_App$renderApp$lambda$_2_0() {
    let a = this; jl_Object.call(a);
    a.$_017 = null;
    a.$_11 = 0;
}
let cwtd_App$renderApp$lambda$_2_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_017 = var$1;
    var$0.$_11 = var$2;
},
cwtd_App$renderApp$lambda$_2_0__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderApp$lambda$_2_0();
    cwtd_App$renderApp$lambda$_2_0__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderApp$lambda$_2_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderApp$0(var$0.$_017, var$0.$_11, var$1);
},
cwtd_App$renderApp$lambda$_2_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
cwtd_App$renderApp$lambda$_2_3 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_3__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_3__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_3();
    cwtd_App$renderApp$lambda$_2_3__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_3_render = (var$0, var$1) => {
    return cwtd_App_renderTextInputFunctional(var$1);
},
cwtd_App$renderApp$lambda$_2_3_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
},
cwtd_App$renderApp$lambda$_2_2 = $rt_classWithoutFields(),
cwtd_App$renderApp$lambda$_2_2__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$renderApp$lambda$_2_2__init_0 = () => {
    let var_0 = new cwtd_App$renderApp$lambda$_2_2();
    cwtd_App$renderApp$lambda$_2_2__init_(var_0);
    return var_0;
},
cwtd_App$renderApp$lambda$_2_2_render = (var$0, var$1) => {
    return cwtd_App_renderTimerFunctional(var$1);
},
cwtd_App$renderApp$lambda$_2_2_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function jur_AbstractCharClass$LazyCategoryScope() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints2 = 0;
    a.$containsAllSurrogates = 0;
}
let jur_AbstractCharClass$LazyCategoryScope__init_1 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategoryScope__init_0 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategoryScope_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategoryScope__init_0($this.$category0);
    if ($this.$containsAllSurrogates)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints2;
    return $chCl;
};
function cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1() {
    jl_Object.call(this);
    this.$_012 = 0;
}
let cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_012 = var$1;
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1();
    cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1_call = var$0 => {
    cwtd_App$StopwatchView_lambda$render$2(var$0.$_012);
},
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1_call$exported$0 = var$1 => {
    var$1.$call();
};
function jur_SupplRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt3 = 0;
}
let jur_SupplRangeSet__init_ = ($this, $cc) => {
    jur_JointSet__init_($this);
    $this.$chars = $cc.$getInstance();
    $this.$alt3 = $cc.$alt;
},
jur_SupplRangeSet__init_0 = var_0 => {
    let var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, $offset, var$8, $low;
    $strLength = $matchResult.$getRightBound();
    if ($stringIndex < $strLength) {
        var$5 = $stringIndex + 1 | 0;
        $high = $testString.$charAt($stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next1.$matches(var$5, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if (var$5 < $strLength) {
            var$8 = var$5 + 1 | 0;
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next1.$matches(var$8, $testString, $matchResult);
        }
    }
    return (-1);
},
jur_SupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains($ch);
},
jur_SupplRangeSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$getCodePoint());
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$getChar());
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
    if (!($set instanceof jur_RangeSet))
        return 1;
    return jur_AbstractCharClass_intersects($this.$chars, $set.$getChars());
},
jur_SupplRangeSet_getChars = $this => {
    return $this.$chars;
},
jur_SupplRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_SupplRangeSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet),
jur_UCISupplRangeSet__init_0 = ($this, $cc) => {
    jur_SupplRangeSet__init_($this, $cc);
},
jur_UCISupplRangeSet__init_ = var_0 => {
    let var_1 = new jur_UCISupplRangeSet();
    jur_UCISupplRangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCISupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
},
jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUpperCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUpperCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUpperCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jur_AbstractLineTerminator = $rt_classWithoutFields(),
jur_AbstractLineTerminator_unixLT = null,
jur_AbstractLineTerminator_unicodeLT = null,
jur_AbstractLineTerminator__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractLineTerminator_getInstance = $flag => {
    if (!($flag & 1)) {
        if (jur_AbstractLineTerminator_unicodeLT !== null)
            return jur_AbstractLineTerminator_unicodeLT;
        jur_AbstractLineTerminator_unicodeLT = jur_AbstractLineTerminator$2__init_0();
        return jur_AbstractLineTerminator_unicodeLT;
    }
    if (jur_AbstractLineTerminator_unixLT !== null)
        return jur_AbstractLineTerminator_unixLT;
    jur_AbstractLineTerminator_unixLT = jur_AbstractLineTerminator$1__init_0();
    return jur_AbstractLineTerminator_unixLT;
};
function jur_HangulDecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF16 = null;
    a.$decomposedCharLength = 0;
}
let jur_HangulDecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
},
jur_HangulDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_HangulDecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HangulDecomposedCharSet_getDecomposedChar = $this => {
    if ($this.$decomposedCharUTF16 === null)
        $this.$decomposedCharUTF16 = jl_String__init_2($this.$decomposedChar);
    return $this.$decomposedCharUTF16;
},
jur_HangulDecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, $syllIndex, $decompSyllable, $vIndex, $tIndex, var$9, $curSymb, $decompCurSymb, var$12, $i, var$14, $lIndex, var$16, var$17;
    $rightBound = $matchResult.$getRightBound();
    $syllIndex = 0;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex >= $rightBound)
        return (-1);
    var$9 = $strIndex + 1 | 0;
    $curSymb = $testString.$charAt($strIndex);
    $decompCurSymb = jur_Lexer_getHangulDecomposition($curSymb);
    if ($decompCurSymb !== null) {
        var$12 = $decompCurSymb.data;
        $i = 0;
        if (var$12.length != $this.$decomposedCharLength)
            return (-1);
        while (true) {
            if ($i >= $this.$decomposedCharLength)
                return $this.$next1.$matches(var$9, $testString, $matchResult);
            if (var$12[$i] != $this.$decomposedChar.data[$i])
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    var$14 = $decompSyllable.data;
    var$14[$syllIndex] = $curSymb;
    $lIndex = $curSymb - 4352 | 0;
    if ($lIndex >= 0 && $lIndex < 19) {
        if (var$9 < $rightBound) {
            $curSymb = $testString.$charAt(var$9);
            $vIndex = $curSymb - 4449 | 0;
        }
        if ($vIndex >= 0 && $vIndex < 21) {
            var$16 = var$9 + 1 | 0;
            var$14[1] = $curSymb;
            if (var$16 < $rightBound) {
                $curSymb = $testString.$charAt(var$16);
                $tIndex = $curSymb - 4519 | 0;
            }
            if ($tIndex >= 0 && $tIndex < 28) {
                var$17 = var$16 + 1 | 0;
                var$14[2] = $curSymb;
                var$17 = $this.$decomposedCharLength == 3 && var$14[0] == $this.$decomposedChar.data[0] && var$14[1] == $this.$decomposedChar.data[1] && var$14[2] == $this.$decomposedChar.data[2] ? $this.$next1.$matches(var$17, $testString, $matchResult) : (-1);
                return var$17;
            }
            var$17 = $this.$decomposedCharLength == 2 && var$14[0] == $this.$decomposedChar.data[0] && var$14[1] == $this.$decomposedChar.data[1] ? $this.$next1.$matches(var$16, $testString, $matchResult) : (-1);
            return var$17;
        }
        return (-1);
    }
    return (-1);
},
jur_HangulDecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        if ($set instanceof jur_HangulDecomposedCharSet) {
            var$2 = $set;
            if (!(jur_HangulDecomposedCharSet_getDecomposedChar(var$2)).$equals(jur_HangulDecomposedCharSet_getDecomposedChar($this))) {
                var$3 = 0;
                break a;
            }
        }
        var$3 = 1;
    }
    return var$3;
},
jur_HangulDecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyPunct__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyPunct__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPunct_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
cwtc_ReactDOM = $rt_classWithoutFields(),
cwth_DomBuilder$P = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$P__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(428));
},
cwth_DomBuilder$P__init_ = () => {
    let var_0 = new cwth_DomBuilder$P();
    cwth_DomBuilder$P__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$P_create = () => {
    return cwth_DomBuilder$P__init_();
};
function cwth_Style() {
    jl_Object.call(this);
    this.$obj = null;
}
let cwth_Style__init_0 = $this => {
    jl_Object__init_($this);
    $this.$obj = cwtc_React_createObject$js_body$_9();
},
cwth_Style__init_ = () => {
    let var_0 = new cwth_Style();
    cwth_Style__init_0(var_0);
    return var_0;
},
cwth_Style_create = () => {
    return cwth_Style__init_();
},
cwth_Style_set = ($this, $property, $value) => {
    $this.$obj[$rt_ustr($property)] = $rt_ustr($value);
    return $this;
},
cwth_Style_background = ($this, $value) => {
    return $this.$set0($rt_s(429), $value);
},
cwth_Style_color = ($this, $value) => {
    return $this.$set0($rt_s(430), $value);
},
cwth_Style_padding = ($this, $value) => {
    return $this.$set0($rt_s(431), $value);
},
cwth_Style_borderRadius = ($this, $value) => {
    return $this.$set0($rt_s(432), $value);
},
cwth_Style_toJSObject = $this => {
    return $this.$obj;
};
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$014 = null;
}
let jur_AbstractCharClass$LazyJavaTitleCase$1__init_ = ($this, $this$0) => {
    $this.$this$014 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaTitleCase$1();
    jur_AbstractCharClass$LazyJavaTitleCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaTitleCase$1_contains = ($this, $ch) => {
    return jl_Character_isTitleCase($ch);
};
function cwtd_App$renderPageNavigationBuilder$lambda$_10_2() {
    jl_Object.call(this);
    this.$_00 = null;
}
let cwtd_App$renderPageNavigationBuilder$lambda$_10_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_00 = var$1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderPageNavigationBuilder$lambda$_10_2();
    cwtd_App$renderPageNavigationBuilder$lambda$_10_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderPageNavigationBuilder$26(var$0.$_00, var$1);
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwth_ElementBuilder() {
    let a = this; jl_Object.call(a);
    a.$tag0 = null;
    a.$textContent = null;
    a.$props = null;
}
let cwth_ElementBuilder__init_0 = ($this, $tag, $textContent) => {
    jl_Object__init_($this);
    $this.$tag0 = $tag;
    $this.$textContent = $textContent;
    $this.$props = cwtc_React_createObject$js_body$_9();
},
cwth_ElementBuilder__init_ = (var_0, var_1) => {
    let var_2 = new cwth_ElementBuilder();
    cwth_ElementBuilder__init_0(var_2, var_0, var_1);
    return var_2;
},
cwth_ElementBuilder_className = ($this, $className) => {
    $this.$props["className"] = $rt_ustr($className);
    return $this;
},
cwth_ElementBuilder_onClick = ($this, $handler) => {
    $this.$props['onClick'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_ElementBuilder_onChange = ($this, $handler) => {
    $this.$props['onChange'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_ElementBuilder_onKeyDown = ($this, $handler) => {
    $this.$props['onKeyDown'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_ElementBuilder_onFocus = ($this, $handler) => {
    $this.$props['onFocus'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_ElementBuilder_onBlur = ($this, $handler) => {
    $this.$props['onBlur'] = otji_JS_function($handler, "handleEvent");
    return $this;
},
cwth_ElementBuilder_value = ($this, $value) => {
    $this.$props["value"] = $rt_ustr($value);
    return $this;
},
cwth_ElementBuilder_placeholder = ($this, $placeholder) => {
    $this.$props["placeholder"] = $rt_ustr($placeholder);
    return $this;
},
cwth_ElementBuilder_disabled = ($this, $disabled) => {
    $this.$props["disabled"] = !!$disabled;
    return $this;
},
cwth_ElementBuilder_checked = ($this, $checked) => {
    $this.$props["checked"] = !!$checked;
    return $this;
},
cwth_ElementBuilder_type = ($this, $type) => {
    $this.$props["type"] = $rt_ustr($type);
    return $this;
},
cwth_ElementBuilder_rows = ($this, $rows) => {
    $this.$props["rows"] = $rows;
    return $this;
},
cwth_ElementBuilder_cols = ($this, $cols) => {
    $this.$props["cols"] = $cols;
    return $this;
},
cwth_ElementBuilder_maxLength = ($this, $maxLength) => {
    $this.$props["maxLength"] = $maxLength;
    return $this;
},
cwth_ElementBuilder_build = $this => {
    if ($this.$textContent === null)
        return React.createElement($rt_ustr($this.$tag0), $this.$props);
    return React.createElement($rt_ustr($this.$tag0), $this.$props, $rt_ustr($this.$textContent));
};
function cwtd_App$renderPageNavigationBuilder$lambda$_10_0() {
    jl_Object.call(this);
    this.$_037 = null;
}
let cwtd_App$renderPageNavigationBuilder$lambda$_10_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_037 = var$1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderPageNavigationBuilder$lambda$_10_0();
    cwtd_App$renderPageNavigationBuilder$lambda$_10_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderPageNavigationBuilder$24(var$0.$_037, var$1);
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
},
otcir_ClassList = $rt_classWithoutFields();
function cwtd_App$renderPageNavigationBuilder$lambda$_10_1() {
    jl_Object.call(this);
    this.$_038 = null;
}
let cwtd_App$renderPageNavigationBuilder$lambda$_10_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_038 = var$1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderPageNavigationBuilder$lambda$_10_1();
    cwtd_App$renderPageNavigationBuilder$lambda$_10_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderPageNavigationBuilder$25(var$0.$_038, var$1);
},
cwtd_App$renderPageNavigationBuilder$lambda$_10_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtc_ReactView$lambda$toComponent$1$lambda$_7_0() {
    jl_Object.call(this);
    this.$_030 = null;
}
let cwtc_ReactView$lambda$toComponent$1$lambda$_7_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_030 = var$1;
},
cwtc_ReactView$lambda$toComponent$1$lambda$_7_0__init_0 = var_0 => {
    let var_1 = new cwtc_ReactView$lambda$toComponent$1$lambda$_7_0();
    cwtc_ReactView$lambda$toComponent$1$lambda$_7_0__init_(var_1, var_0);
    return var_1;
},
cwtc_ReactView$lambda$toComponent$1$lambda$_7_0_run = var$0 => {
    return cwtc_ReactView_lambda$toComponent$0(var$0.$_030);
},
cwtc_ReactView$lambda$toComponent$1$lambda$_7_0_run$exported$0 = var$1 => {
    return otji_JS_function(var$1.$run(), "call");
};
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$021 = null;
}
let jur_AbstractCharClass$LazyJavaMirrored$1__init_ = ($this, $this$0) => {
    $this.$this$021 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaMirrored$1();
    jur_AbstractCharClass$LazyJavaMirrored$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaMirrored$1_contains = ($this, $ch) => {
    return 0;
};
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$035 = null;
}
let jur_AbstractCharClass$LazyJavaISOControl$1__init_ = ($this, $this$0) => {
    $this.$this$035 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaISOControl$1();
    jur_AbstractCharClass$LazyJavaISOControl$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaISOControl$1_contains = ($this, $ch) => {
    return jl_Character_isISOControl($ch);
};
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
let jur_WordBoundary__init_0 = ($this, $positive) => {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
},
jur_WordBoundary__init_ = var_0 => {
    let var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
},
jur_WordBoundary_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $ch1, $ch2, $leftBound, $left, $right;
    $ch1 = $stringIndex < $matchResult.$getRightBound() ? $testString.$charAt($stringIndex) : 32;
    $ch2 = !$stringIndex ? 32 : $testString.$charAt($stringIndex - 1 | 0);
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    $left = $ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString) ? 0 : 1;
    $right = $ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString) ? 0 : 1;
    return $left ^ $right ^ $this.$positive ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_WordBoundary_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_WordBoundary_isSpace = ($this, $ch, $index, $leftBound, $testString) => {
    let var$5;
    if (!jl_Character_isLetterOrDigit0($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType0($ch) == 6)
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    var$5 = $testString.$charAt($index);
                    if (jl_Character_isLetterOrDigit0(var$5))
                        return 0;
                    if (jl_Character_getType0(var$5) != 6)
                        return 1;
                }
        }
        return 1;
    }
    return 0;
};
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter3 = 0;
}
let jur_UEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter3 = $counter;
},
jur_UEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex >= $rightBound) {
        $matchResult.$setConsumed($this.$consCounter3, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (($rightBound - $strIndex | 0) == 1 && $testString.$charAt($strIndex) == 10) {
        $matchResult.$setConsumed($this.$consCounter3, 1);
        return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_UEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter3) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter3, (-1));
    return $res;
},
jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(9, 13)).$add(32);
},
cwtc_JsUtil = $rt_classWithoutFields();
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
let jur_UCICharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch2 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
},
jur_UCICharSet__init_0 = var_0 => {
    let var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch2 != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex))) ? (-1) : 1;
};
function cwtd_App$CounterView$render$lambda$_1_2() {
    jl_Object.call(this);
    this.$_010 = null;
}
let cwtd_App$CounterView$render$lambda$_1_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_010 = var$1;
},
cwtd_App$CounterView$render$lambda$_1_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$CounterView$render$lambda$_1_2();
    cwtd_App$CounterView$render$lambda$_1_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$CounterView$render$lambda$_1_2_handleEvent = (var$0, var$1) => {
    cwtd_App$CounterView_lambda$render$4(var$0.$_010, var$1);
},
cwtd_App$CounterView$render$lambda$_1_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$CounterView$render$lambda$_1_1() {
    jl_Object.call(this);
    this.$_043 = null;
}
let cwtd_App$CounterView$render$lambda$_1_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_043 = var$1;
},
cwtd_App$CounterView$render$lambda$_1_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$CounterView$render$lambda$_1_1();
    cwtd_App$CounterView$render$lambda$_1_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$CounterView$render$lambda$_1_1_handleEvent = (var$0, var$1) => {
    cwtd_App$CounterView_lambda$render$3(var$0.$_043, var$1);
},
cwtd_App$CounterView$render$lambda$_1_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index1 = 0;
}
let jur_AtomicFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_AtomicFSet__init_0 = var_0 => {
    let var_1 = new jur_AtomicFSet();
    jur_AtomicFSet__init_(var_1, var_0);
    return var_1;
},
jur_AtomicFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    $this.$index1 = $stringIndex;
    return $stringIndex;
},
jur_AtomicFSet_getIndex = $this => {
    return $this.$index1;
},
jur_AtomicFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function cwtd_App$CounterView$render$lambda$_1_0() {
    jl_Object.call(this);
    this.$_036 = null;
}
let cwtd_App$CounterView$render$lambda$_1_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_036 = var$1;
},
cwtd_App$CounterView$render$lambda$_1_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$CounterView$render$lambda$_1_0();
    cwtd_App$CounterView$render$lambda$_1_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$CounterView$render$lambda$_1_0_handleEvent = (var$0, var$1) => {
    cwtd_App$CounterView_lambda$render$1(var$0.$_036, var$1);
},
cwtd_App$CounterView$render$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low = 0;
}
let jur_LowSurrogateCharSet__init_0 = ($this, $low) => {
    jur_JointSet__init_($this);
    $this.$low = $low;
},
jur_LowSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_LowSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $low, $high;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 > $matchResult.$getRightBound()) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $low = $testString.$charAt($stringIndex);
    if ($stringIndex > $matchResult.$getLeftBound()) {
        $high = $testString.$charAt($stringIndex - 1 | 0);
        if (jl_Character_isHighSurrogate($high))
            return (-1);
    }
    if ($this.$low != $low)
        return (-1);
    return $this.$next1.$matches(var$4, $testString, $matchResult);
},
jur_LowSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $startStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $startStr = $matchResult.$getLeftBound();
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$7 = $testStr.$indexOf1($this.$low, $strIndex);
        if (var$7 < 0)
            return (-1);
        if (var$7 > $startStr && jl_Character_isHighSurrogate($testStr.$charAt(var$7 - 1 | 0))) {
            $strIndex = var$7 + 1 | 0;
            continue;
        }
        var$8 = $this.$next1;
        $strIndex = var$7 + 1 | 0;
        if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$7;
},
jur_LowSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $startStr, $testStr, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $startStr = $matchResult.$getLeftBound();
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf1($this.$low, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if (var$7 > $startStr && jl_Character_isHighSurrogate($testStr.$charAt(var$7 - 1 | 0))) {
                $lastIndex = var$7 + (-2) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$7 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_LowSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_HighSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_LowSurrogateCharSet))
        return 1;
    return $set.$low != $this.$low ? 0 : 1;
},
jur_LowSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CompositeGroupQuantifierSet() {
    let a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier0 = null;
    a.$setCounter = 0;
}
let jur_CompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
    $this.$setCounter = $setCounter;
},
jur_CompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_CompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, var$5, var$6, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier0.$max())
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    var$5 = $this.$setCounter;
    var$6 = $enterCounter + 1 | 0;
    $matchResult.$setEnterCounter(var$5, var$6);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        $matchResult.$setEnterCounter($this.$setCounter, 0);
        return $nextIndex;
    }
    var$5 = $this.$setCounter;
    var$6 = var$6 + (-1) | 0;
    $matchResult.$setEnterCounter(var$5, var$6);
    if (var$6 >= $this.$quantifier0.$min())
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $matchResult.$setEnterCounter($this.$setCounter, 0);
    return (-1);
},
jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_RelCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
},
jur_RelCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_RelCompositeGroupQuantifierSet();
    jur_RelCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_RelCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier0.$max()) {
        $matchResult.$setEnterCounter($this.$setCounter, 0);
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    if ($enterCounter < $this.$quantifier0.$min()) {
        $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    } else {
        $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex >= 0) {
            $matchResult.$setEnterCounter($this.$setCounter, 0);
            return $nextIndex;
        }
        $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    }
    return $nextIndex;
},
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size0 = 0;
}
let ju_ArrayList__init_1 = $this => {
    ju_ArrayList__init_($this, 10);
},
ju_ArrayList__init_0 = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_1(var_0);
    return var_0;
},
ju_ArrayList__init_ = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_ArrayList__init_2 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size0;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size0;
    $this.$size0 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_add0 = ($this, $index, $element) => {
    let $i;
    ju_ArrayList_checkIndexForAdd($this, $index);
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    $i = $this.$size0;
    while ($i > $index) {
        $this.$array.data[$i] = $this.$array.data[$i - 1 | 0];
        $i = $i + (-1) | 0;
    }
    $this.$array.data[$index] = $element;
    $this.$size0 = $this.$size0 + 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_ArrayList_remove = ($this, $i) => {
    let $old, var$3, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    $old = $this.$array.data[$i];
    $this.$size0 = $this.$size0 - 1 | 0;
    while ($i < $this.$size0) {
        var$3 = $this.$array.data;
        var$4 = $this.$array.data;
        $i_0 = $i + 1 | 0;
        var$3[$i] = var$4[$i_0];
        $i = $i_0;
    }
    $this.$array.data[$this.$size0] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_checkIndexForAdd = ($this, $index) => {
    if ($index >= 0 && $index <= $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
cwte_FocusEventHandler = $rt_classWithoutFields(0);
function cwtd_App$renderTextInputFunctional$lambda$_5_2() {
    jl_Object.call(this);
    this.$_025 = null;
}
let cwtd_App$renderTextInputFunctional$lambda$_5_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_025 = var$1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderTextInputFunctional$lambda$_5_2();
    cwtd_App$renderTextInputFunctional$lambda$_5_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTextInputFunctional$17(var$0.$_025, var$1);
},
cwtd_App$renderTextInputFunctional$lambda$_5_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent1(var$2);
},
jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_RelAltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltGroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_RelAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_RelAltGroupQuantifierSet();
    jur_RelAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_RelAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $nextIndex;
},
jur_IntHash = $rt_classWithoutFields();
function cwtd_App$renderTextInputFunctional$lambda$_5_1() {
    jl_Object.call(this);
    this.$_015 = null;
}
let cwtd_App$renderTextInputFunctional$lambda$_5_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_015 = var$1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderTextInputFunctional$lambda$_5_1();
    cwtd_App$renderTextInputFunctional$lambda$_5_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTextInputFunctional$16(var$0.$_015, var$1);
},
cwtd_App$renderTextInputFunctional$lambda$_5_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent1(var$2);
};
function cwtd_App$renderTextInputFunctional$lambda$_5_0() {
    jl_Object.call(this);
    this.$_01 = null;
}
let cwtd_App$renderTextInputFunctional$lambda$_5_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_01 = var$1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderTextInputFunctional$lambda$_5_0();
    cwtd_App$renderTextInputFunctional$lambda$_5_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderTextInputFunctional$lambda$_5_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTextInputFunctional$15(var$0.$_01, var$1);
},
cwtd_App$renderTextInputFunctional$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jl_String = $rt_classWithoutFields(),
jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_3 = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_6 = () => {
    let var_0 = new jl_String();
    jl_String__init_3(var_0);
    return var_0;
},
jl_String__init_0 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_2 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_0(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_4(var_1, var_0);
    return var_1;
},
jl_String__init_5 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_1 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_5(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + $prefix.$length() | 0) > $this.$length())
        return 0;
    $i = 0;
    while ($i < $prefix.$length()) {
        var$4 = $prefix.$charAt($i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != $this.$charAt($toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
},
jl_String_startsWith0 = ($this, $prefix) => {
    if ($this === $prefix)
        return 1;
    return $this.$startsWith0($prefix, 0);
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo, var$7;
    $i = jl_Math_min($fromIndex, $this.$length() - 1 | 0);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i < 0)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + (-1) | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i < 1)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $lo) {
            var$7 = $i - 1 | 0;
            if ($this.$nativeString.charCodeAt(var$7) == $hi)
                break;
        }
        $i = $i + (-1) | 0;
    }
    return var$7;
},
jl_String_indexOf0 = ($this, $str, $fromIndex) => {
    let $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = $this.$length() - $str.$length() | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$length())
                break a;
            if ($this.$charAt($i + $j | 0) != $str.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf0 = ($this, $str, $fromIndex) => {
    let $i, $j;
    $i = jl_Math_min($fromIndex, $this.$length() - $str.$length() | 0);
    a: while (true) {
        if ($i < 0)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$length())
                break a;
            if ($this.$charAt($i + $j | 0) != $str.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + (-1) | 0;
    }
    return $i;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_($this.$nativeString.substring($beginIndex, $endIndex));
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_substring0 = ($this, $beginIndex) => {
    return $this.$substring($beginIndex, $this.$length());
},
jl_String_subSequence = ($this, $beginIndex, $endIndex) => {
    return $this.$substring($beginIndex, $endIndex);
},
jl_String_contains = ($this, $s) => {
    let $sz, $i, $j;
    $sz = $this.$length() - $s.$length() | 0;
    $i = 0;
    while ($i <= $sz) {
        $j = 0;
        while (true) {
            if ($j >= $s.$length())
                return 1;
            if ($this.$charAt($i + $j | 0) != $s.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return 0;
},
jl_String_trim = $this => {
    let $lower, $upper;
    $lower = 0;
    $upper = $this.$length() - 1 | 0;
    a: {
        while ($lower <= $upper) {
            if ($this.$charAt($lower) > 32)
                break a;
            $lower = $lower + 1 | 0;
        }
    }
    while ($lower <= $upper && $this.$charAt($upper) <= 32) {
        $upper = $upper + (-1) | 0;
    }
    return $this.$substring($lower, $upper + 1 | 0);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$charAt($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(8) : $obj.$toString();
},
jl_String_valueOf0 = $i => {
    jl_String_$callClinit();
    return ((jl_StringBuilder__init_()).$append2($i)).$toString();
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_toLowerCase = $this => {
    let $lowerCase;
    $lowerCase = $this.$nativeString.toLowerCase();
    if ($lowerCase !== $this.$nativeString)
        $this = jl_String__init_($lowerCase);
    return $this;
},
jl_String_toUpperCase = $this => {
    let $upperCase;
    $upperCase = $this.$nativeString.toUpperCase();
    if ($upperCase !== $this.$nativeString)
        $this = jl_String__init_($upperCase);
    return $this;
},
jl_String_split = ($this, $regex) => {
    return jur_Pattern_split(jur_Pattern_compile($regex), $this.$toString());
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_6();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_118_0__init_0();
},
cwth_DomBuilder$Input = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Input__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(205));
},
cwth_DomBuilder$Input__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Input();
    cwth_DomBuilder$Input__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Input_create = () => {
    return cwth_DomBuilder$Input__init_0();
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Div = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Div__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(433));
},
cwth_DomBuilder$Div__init_ = () => {
    let var_0 = new cwth_DomBuilder$Div();
    cwth_DomBuilder$Div__init_0(var_0);
    return var_0;
};
let cwth_DomBuilder$Div_create = () => {
    return cwth_DomBuilder$Div__init_();
},
jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_ReluctantAltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantAltQuantifierSet();
    jur_ReluctantAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaWhitespace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaWhitespace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaWhitespace$1__init_0($this);
};
function cwtc_ReactContext() {
    jl_Object.call(this);
    this.$jsContext = null;
}
let cwtc_ReactContext__init_ = ($this, $jsContext) => {
    jl_Object__init_($this);
    $this.$jsContext = $jsContext;
},
cwtc_ReactContext__init_0 = var_0 => {
    let var_1 = new cwtc_ReactContext();
    cwtc_ReactContext__init_(var_1, var_0);
    return var_1;
},
cwtc_ReactContext_create = $defaultValue => {
    return cwtc_ReactContext__init_0(React.createContext($rt_ustr($defaultValue)));
},
cwtc_ReactContext_useString = $this => {
    return $rt_str('' + React.useContext($this.$jsContext));
},
cwtc_ReactContext_provide = ($this, $value, $children) => {
    let $props;
    $props = cwtc_React_createObject$js_body$_9();
    $props['value'] = $rt_ustr($value);
    return cwtc_ReactContext_createProviderElement($this, $props, $children);
},
cwtc_ReactContext_createProviderElement = ($this, $props, $children) => {
    let $provider, $all, $i, var$6;
    $provider = $this.$jsContext.Provider;
    $all = cwtc_React_createArray$js_body$_27();
    $i = 0;
    while (true) {
        var$6 = $children.data;
        if ($i >= var$6.length)
            break;
        $all.push(otji_JSWrapper_unwrap(var$6[$i]));
        $i = $i + 1 | 0;
    }
    return cwtc_React_createElementFromArray$js_body$_30($provider, $props, $all);
},
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0 = $rt_classWithoutFields(),
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0__init_0 = () => {
    let var_0 = new cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0();
    cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0__init_(var_0);
    return var_0;
},
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0_update = (var$0, var$1) => {
    return cwtd_App$StopwatchView_lambda$render$0(var$1);
},
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet),
jur_FSet$PossessiveFSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_FSet$PossessiveFSet__init_0 = () => {
    let var_0 = new jur_FSet$PossessiveFSet();
    jur_FSet$PossessiveFSet__init_(var_0);
    return var_0;
},
jur_FSet$PossessiveFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_FSet$PossessiveFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
cwtd_App$addTodo$lambda$_7_0 = $rt_classWithoutFields(),
cwtd_App$addTodo$lambda$_7_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$addTodo$lambda$_7_0__init_0 = () => {
    let var_0 = new cwtd_App$addTodo$lambda$_7_0();
    cwtd_App$addTodo$lambda$_7_0__init_(var_0);
    return var_0;
},
cwtd_App$addTodo$lambda$_7_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$addTodo$23(var$1);
},
cwtd_App$addTodo$lambda$_7_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_0(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_2 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_1(var_1, var_0);
    return var_1;
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NumberFormatException__init_1 = $this => {
    jl_IllegalArgumentException__init_0($this);
},
jl_NumberFormatException__init_2 = () => {
    let var_0 = new jl_NumberFormatException();
    jl_NumberFormatException__init_1(var_0);
    return var_0;
},
jl_NumberFormatException__init_ = ($this, $message) => {
    jl_IllegalArgumentException__init_1($this, $message);
},
jl_NumberFormatException__init_0 = var_0 => {
    let var_1 = new jl_NumberFormatException();
    jl_NumberFormatException__init_(var_1, var_0);
    return var_1;
},
jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_PosCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_PosCompositeGroupQuantifierSet();
    jur_PosCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_PosCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier0.$max();
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier0.$min())
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
};
function cwtc_ReactView$lambda$toComponent$0$lambda$_8_0() {
    jl_Object.call(this);
    this.$_042 = null;
}
let cwtc_ReactView$lambda$toComponent$0$lambda$_8_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_042 = var$1;
},
cwtc_ReactView$lambda$toComponent$0$lambda$_8_0__init_0 = var_0 => {
    let var_1 = new cwtc_ReactView$lambda$toComponent$0$lambda$_8_0();
    cwtc_ReactView$lambda$toComponent$0$lambda$_8_0__init_(var_1, var_0);
    return var_1;
},
cwtc_ReactView$lambda$toComponent$0$lambda$_8_0_call = var$0 => {
    var$0.$_042.$onUnmount();
},
cwtc_ReactView$lambda$toComponent$0$lambda$_8_0_call$exported$0 = var$1 => {
    var$1.$call();
};
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
let jur_MultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
},
jur_MultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif, $ch1, $ch2;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if (!$strDif) {
        $matchResult.$setConsumed($this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($strDif < 2) {
        $ch1 = $testString.$charAt($strIndex);
        $ch2 = 97;
    } else {
        $ch1 = $testString.$charAt($strIndex);
        $ch2 = $testString.$charAt($strIndex + 1 | 0);
    }
    switch ($ch1) {
        case 10:
        case 133:
        case 8232:
        case 8233:
            $matchResult.$setConsumed($this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        case 13:
            if ($ch2 != 10) {
                $matchResult.$setConsumed($this.$consCounter, 0);
                return $this.$next1.$matches($strIndex, $testString, $matchResult);
            }
            $matchResult.$setConsumed($this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        default:
    }
    return (-1);
},
jur_MultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter, (-1));
    return $res;
};
function cwtd_App$StopwatchView$render$lambda$_3_1() {
    jl_Object.call(this);
    this.$_021 = null;
}
let cwtd_App$StopwatchView$render$lambda$_3_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_021 = var$1;
},
cwtd_App$StopwatchView$render$lambda$_3_1__init_0 = var_0 => {
    let var_1 = new cwtd_App$StopwatchView$render$lambda$_3_1();
    cwtd_App$StopwatchView$render$lambda$_3_1__init_(var_1, var_0);
    return var_1;
},
cwtd_App$StopwatchView$render$lambda$_3_1_handleEvent = (var$0, var$1) => {
    cwtd_App$StopwatchView_lambda$render$4(var$0.$_021, var$1);
},
cwtd_App$StopwatchView$render$lambda$_3_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$StopwatchView$render$lambda$_3_0() {
    jl_Object.call(this);
    this.$_034 = null;
}
let cwtd_App$StopwatchView$render$lambda$_3_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_034 = var$1;
},
cwtd_App$StopwatchView$render$lambda$_3_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$StopwatchView$render$lambda$_3_0();
    cwtd_App$StopwatchView$render$lambda$_3_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$StopwatchView$render$lambda$_3_0_run = var$0 => {
    return cwtd_App$StopwatchView_lambda$render$3(var$0.$_034);
},
cwtd_App$StopwatchView$render$lambda$_3_0_run$exported$0 = var$1 => {
    return otji_JS_function(var$1.$run(), "call");
},
jur_IntArrHash = $rt_classWithoutFields(),
jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaMirrored__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaMirrored_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaMirrored$1__init_0($this);
};
function cwtd_App$StopwatchView$render$lambda$_3_2() {
    jl_Object.call(this);
    this.$_05 = null;
}
let cwtd_App$StopwatchView$render$lambda$_3_2__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_05 = var$1;
},
cwtd_App$StopwatchView$render$lambda$_3_2__init_0 = var_0 => {
    let var_1 = new cwtd_App$StopwatchView$render$lambda$_3_2();
    cwtd_App$StopwatchView$render$lambda$_3_2__init_(var_1, var_0);
    return var_1;
},
cwtd_App$StopwatchView$render$lambda$_3_2_handleEvent = (var$0, var$1) => {
    cwtd_App$StopwatchView_lambda$render$5(var$0.$_05, var$1);
},
cwtd_App$StopwatchView$render$lambda$_3_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$012 = null;
}
let jur_AbstractCharClass$LazyJavaDigit$1__init_ = ($this, $this$0) => {
    $this.$this$012 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDigit$1();
    jur_AbstractCharClass$LazyJavaDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDigit$1_contains = ($this, $ch) => {
    return jl_Character_isDigit($ch);
},
jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaISOControl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaISOControl_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaISOControl$1__init_0($this);
},
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalStateException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalStateException__init_0 = () => {
    let var_0 = new jl_IllegalStateException();
    jl_IllegalStateException__init_(var_0);
    return var_0;
};
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high = 0;
}
let jur_HighSurrogateCharSet__init_ = ($this, $high) => {
    jur_JointSet__init_($this);
    $this.$high = $high;
},
jur_HighSurrogateCharSet__init_0 = var_0 => {
    let var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_(var_1, var_0);
    return var_1;
},
jur_HighSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HighSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    var$6 = $rt_compare(var$5, $strLength);
    if (var$6 > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (var$6 < 0) {
        $low = $testString.$charAt(var$5);
        if (jl_Character_isLowSurrogate($low))
            return (-1);
    }
    if ($this.$high != $high)
        return (-1);
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_HighSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = $testStr.$indexOf1($this.$high, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex < $strLength && jl_Character_isLowSurrogate($testStr.$charAt($strIndex))) {
            $strIndex = var$6 + 2 | 0;
            continue;
        }
        if ($this.$next1.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_HighSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf1($this.$high, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            var$8 = var$7 + 1 | 0;
            if (var$8 < $strLength && jl_Character_isLowSurrogate($testStr.$charAt(var$8))) {
                $lastIndex = var$7 + (-1) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$8, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_HighSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_LowSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_HighSurrogateCharSet))
        return 1;
    return $set.$high != $this.$high ? 0 : 1;
},
jur_HighSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_ReluctantCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_ReluctantCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_ReluctantCompositeQuantifierSet();
    jur_ReluctantCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_ReluctantCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, var$7, var$8;
    $min = $this.$quantifier.$min();
    $max = $this.$quantifier.$max();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$7 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                    if (var$7 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
                        var$7 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$7 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$7 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$7;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$8 < 1)
            break;
        $stringIndex = $stringIndex + var$8 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0 = $rt_classWithoutFields(),
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0__init_0 = () => {
    let var_0 = new cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0();
    cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0__init_(var_0);
    return var_0;
},
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderCounterBuilder$29(var$1);
},
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_ = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_1(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_2 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_0(var_0);
    return var_0;
},
jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet),
jur_SOLSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_SOLSet__init_0 = () => {
    let var_0 = new jur_SOLSet();
    jur_SOLSet__init_(var_0);
    return var_0;
},
jur_SOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if ($strIndex && !($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound()))
        return (-1);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_SOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$028 = null;
}
let jur_AbstractCharClass$LazyJavaSpaceChar$1__init_ = ($this, $this$0) => {
    $this.$this$028 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1();
    jur_AbstractCharClass$LazyJavaSpaceChar$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaSpaceChar$1_contains = ($this, $ch) => {
    return jl_Character_isSpaceChar($ch);
},
jl_Math = $rt_classWithoutFields(),
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
otji_JSWrapper$Helper$FinalizationRegistryConsumer = $rt_classWithoutFields(0),
cwth_DomBuilder$Dt = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Dt__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(434));
},
cwth_DomBuilder$Dt__init_ = () => {
    let var_0 = new cwth_DomBuilder$Dt();
    cwth_DomBuilder$Dt__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$Dt_create = () => {
    return cwth_DomBuilder$Dt__init_();
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_PatternSyntaxException() {
    let a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index3 = 0;
}
let jur_PatternSyntaxException__init_0 = ($this, $description, $pattern, $index) => {
    jl_IllegalArgumentException__init_0($this);
    $this.$index3 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index3 = $index;
},
jur_PatternSyntaxException__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cwth_DomBuilder$Ul = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Ul__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(435));
},
cwth_DomBuilder$Ul__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Ul();
    cwth_DomBuilder$Ul__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Ul_create = () => {
    return cwth_DomBuilder$Ul__init_0();
},
jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDefined__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDefined_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDefined$1__init_0($this);
    $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
cwth_DomBuilder$Nav = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Nav__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(436));
},
cwth_DomBuilder$Nav__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Nav();
    cwth_DomBuilder$Nav__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Nav_create = () => {
    return cwth_DomBuilder$Nav__init_0();
},
cwth_DomBuilder$Dd = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Dd__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(437));
},
cwth_DomBuilder$Dd__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Dd();
    cwth_DomBuilder$Dd__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Dd_create = () => {
    return cwth_DomBuilder$Dd__init_0();
},
cwth_DomBuilder$Textarea = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Textarea__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(206));
},
cwth_DomBuilder$Textarea__init_ = () => {
    let var_0 = new cwth_DomBuilder$Textarea();
    cwth_DomBuilder$Textarea__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$Textarea_create = () => {
    return cwth_DomBuilder$Textarea__init_();
},
cwtd_App$CounterView$lambda$render$1$lambda$_5_0 = $rt_classWithoutFields(),
cwtd_App$CounterView$lambda$render$1$lambda$_5_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$CounterView$lambda$render$1$lambda$_5_0__init_0 = () => {
    let var_0 = new cwtd_App$CounterView$lambda$render$1$lambda$_5_0();
    cwtd_App$CounterView$lambda$render$1$lambda$_5_0__init_(var_0);
    return var_0;
},
cwtd_App$CounterView$lambda$render$1$lambda$_5_0_update = (var$0, var$1) => {
    return cwtd_App$CounterView_lambda$render$0(var$1);
},
cwtd_App$CounterView$lambda$render$1$lambda$_5_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
cwtd_App$main$lambda$_1_0 = $rt_classWithoutFields(),
cwtd_App$main$lambda$_1_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cwtd_App$main$lambda$_1_0__init_0 = () => {
    let var_0 = new cwtd_App$main$lambda$_1_0();
    cwtd_App$main$lambda$_1_0__init_(var_0);
    return var_0;
},
cwtd_App$main$lambda$_1_0_render = (var$0, var$1) => {
    return cwtd_App_renderApp(var$1);
},
cwtd_App$main$lambda$_1_0_render$exported$0 = (var$1, var$2) => {
    return var$1.$render(var$2);
};
function cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0() {
    jl_Object.call(this);
    this.$_06 = null;
}
let cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_06 = var$1;
},
cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0();
    cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0_update = (var$0, var$1) => {
    return cwtd_App_lambda$renderCounterFunctional$3(var$0.$_06, var$1);
},
cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0_update$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    return var$1.$update(var$3);
},
cwth_DomBuilder$Dl = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Dl__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(438));
},
cwth_DomBuilder$Dl__init_ = () => {
    let var_0 = new cwth_DomBuilder$Dl();
    cwth_DomBuilder$Dl__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$Dl_create = () => {
    return cwth_DomBuilder$Dl__init_();
};
function jur_Pattern() {
    let a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount0 = 0;
    a.$consCount0 = 0;
    a.$start1 = null;
}
let jur_Pattern_matcher = ($this, $input) => {
    return jur_Matcher__init_0($this, $input);
},
jur_Pattern_split0 = ($this, $inputSeq, $limit) => {
    let $res, $mat, $index, $curPos, var$7, var$8;
    $res = ju_ArrayList__init_0();
    $mat = jur_Pattern_matcher($this, $inputSeq);
    $index = 0;
    $curPos = 0;
    if (!$inputSeq.$length()) {
        var$7 = $rt_createArray(jl_String, 1);
        var$7.data[0] = $rt_s(9);
        return var$7;
    }
    while (jur_Matcher_find0($mat)) {
        var$8 = $index + 1 | 0;
        if (var$8 >= $limit && $limit > 0)
            break;
        $res.$add2(($inputSeq.$subSequence($curPos, jur_Matcher_start($mat))).$toString());
        $curPos = jur_Matcher_end0($mat);
        $index = var$8;
    }
    a: {
        $res.$add2(($inputSeq.$subSequence($curPos, $inputSeq.$length())).$toString());
        var$8 = $index + 1 | 0;
        if (!$limit)
            while (true) {
                var$8 = var$8 + (-1) | 0;
                if (var$8 < 0)
                    break;
                if ((($res.$get(var$8)).$toString()).$length())
                    break a;
                $res.$remove(var$8);
            }
    }
    if (var$8 < 0)
        var$8 = 0;
    return $res.$toArray($rt_createArray(jl_String, var$8));
},
jur_Pattern_split = ($this, $input) => {
    return jur_Pattern_split0($this, $input, 0);
},
jur_Pattern_pattern = $this => {
    return $this.$lexemes.$toString();
},
jur_Pattern_compile0 = ($pattern, $flags) => {
    if ($pattern === null)
        $rt_throw(jl_NullPointerException__init_($rt_s(439)));
    if ($flags && ($flags | 255) != 255)
        $rt_throw(jl_IllegalArgumentException__init_2($rt_s(9)));
    jur_AbstractSet_$callClinit();
    jur_AbstractSet_counter = 1;
    return jur_Pattern_compileImpl(jur_Pattern__init_0(), $pattern, $flags);
},
jur_Pattern_compileImpl = ($this, $pattern, $flags) => {
    $this.$lexemes = jur_Lexer__init_0($pattern, $flags);
    $this.$flags = $flags;
    $this.$start1 = jur_Pattern_processExpression($this, (-1), $this.$flags, null);
    if ($this.$lexemes.$isEmpty()) {
        jur_Pattern_finalizeCompile($this);
        return $this;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
},
jur_Pattern_processAlternations = ($this, $last) => {
    let $auxRange, var$3, $rangeSet;
    $auxRange = jur_CharClass__init_4(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    while (!$this.$lexemes.$isEmpty()) {
        var$3 = $this.$lexemes;
        if (!var$3.$isLetter0())
            break;
        var$3 = $this.$lexemes;
        if (var$3.$lookAhead() && $this.$lexemes.$lookAhead() != (-536870788)) {
            var$3 = $this.$lexemes;
            if (var$3.$lookAhead() != (-536870871))
                break;
        }
        $auxRange.$add($this.$lexemes.$next0());
        if ($this.$lexemes.$peek() != (-536870788))
            continue;
        $this.$lexemes.$next0();
    }
    $rangeSet = jur_Pattern_processRangeSet($this, $auxRange);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processExpression = ($this, $ch, $newFlags, $last) => {
    let $children, $saveFlags, $saveChangedFlags, $fSet, var$8, $child;
    $children = ju_ArrayList__init_0();
    $saveFlags = $this.$flags;
    $saveChangedFlags = 0;
    if ($newFlags != $this.$flags)
        $this.$flags = $newFlags;
    a: {
        switch ($ch) {
            case -1073741784:
                $fSet = new jur_NonCapFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_NonCapFSet__init_($fSet, var$8);
                break a;
            case -536870872:
            case -268435416:
                break;
            case -134217688:
            case -67108824:
                $fSet = new jur_BehindFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_BehindFSet__init_($fSet, var$8);
                break a;
            case -33554392:
                $fSet = new jur_AtomicFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_AtomicFSet__init_($fSet, var$8);
                break a;
            default:
                $this.$globalGroupIndex = $this.$globalGroupIndex + 1 | 0;
                if ($last !== null)
                    $fSet = jur_FSet__init_0($this.$globalGroupIndex);
                else {
                    $fSet = jur_FinalSet__init_0();
                    $saveChangedFlags = 1;
                }
                if ($this.$globalGroupIndex <= (-1))
                    break a;
                if ($this.$globalGroupIndex >= 10)
                    break a;
                $this.$backRefs.data[$this.$globalGroupIndex] = $fSet;
                break a;
        }
        $fSet = jur_AheadFSet__init_0();
    }
    while (true) {
        if ($this.$lexemes.$isLetter0() && $this.$lexemes.$lookAhead() == (-536870788))
            $child = jur_Pattern_processAlternations($this, $fSet);
        else if ($this.$lexemes.$peek() == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            $this.$lexemes.$next0();
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            if ($this.$lexemes.$peek() == (-536870788))
                $this.$lexemes.$next0();
        }
        if ($child !== null)
            $children.$add2($child);
        if ($this.$lexemes.$isEmpty())
            break;
        if ($this.$lexemes.$peek() == (-536870871))
            break;
    }
    if ($this.$lexemes.$back() == (-536870788))
        $children.$add2(jur_EmptySet__init_($fSet));
    if ($this.$flags != $saveFlags && !$saveChangedFlags) {
        $this.$flags = $saveFlags;
        $this.$lexemes.$restoreFlags($this.$flags);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            return jur_PositiveLookAhead__init_0($children, $fSet);
        case -268435416:
            return jur_NegativeLookAhead__init_0($children, $fSet);
        case -134217688:
            return jur_PositiveLookBehind__init_0($children, $fSet);
        case -67108824:
            return jur_NegativeLookBehind__init_0($children, $fSet);
        case -33554392:
            return jur_AtomicJointSet__init_0($children, $fSet);
        default:
            switch ($children.$size()) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_0($children.$get(0), $fSet);
                default:
                    return jur_JointSet__init_1($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    return jur_NonCapJointSet__init_0($children, $fSet);
},
jur_Pattern_processSequence = $this => {
    let $substring, var$2, $ch;
    $substring = jl_StringBuffer__init_0();
    while (!$this.$lexemes.$isEmpty()) {
        var$2 = $this.$lexemes;
        if (!var$2.$isLetter0())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isHighSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isLowSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (!(!var$2.$isNextSpecial() && !$this.$lexemes.$lookAhead())) {
            var$2 = $this.$lexemes;
            if (!(!var$2.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead()))) {
                var$2 = $this.$lexemes;
                if (var$2.$lookAhead() != (-536870871)) {
                    var$2 = $this.$lexemes;
                    if ((var$2.$lookAhead() & (-2147418113)) != (-2147483608)) {
                        var$2 = $this.$lexemes;
                        if (var$2.$lookAhead() != (-536870788)) {
                            var$2 = $this.$lexemes;
                            if (var$2.$lookAhead() != (-536870876))
                                break;
                        }
                    }
                }
            }
        }
        $ch = $this.$lexemes.$next0();
        if (!jl_Character_isSupplementaryCodePoint($ch))
            $substring.$append13($ch & 65535);
        else
            $substring.$append14(jl_Character_toChars($ch));
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_SequenceSet__init_0($substring);
    if (jur_Pattern_hasFlag($this, 64))
        return jur_UCISequenceSet__init_0($substring);
    return jur_CISequenceSet__init_0($substring);
},
jur_Pattern_processDecomposedChar = $this => {
    let $codePoints, $readCodePoints, $curSymb, $curSymbIndex, var$5, $codePointsHangul, var$7, var$8, var$9, var$10;
    $codePoints = $rt_createIntArray(4);
    $readCodePoints = 0;
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter0()) {
        var$5 = $codePoints.data;
        $curSymb = $this.$lexemes.$next0();
        var$5[$readCodePoints] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        var$5 = $codePointsHangul.data;
        var$5[$readCodePoints] = $curSymb & 65535;
        var$7 = $this.$lexemes.$peek();
        var$8 = var$7 - 4449 | 0;
        if (var$8 >= 0 && var$8 < 21) {
            var$5[1] = var$7 & 65535;
            $this.$lexemes.$next0();
            var$9 = $this.$lexemes.$peek();
            var$7 = var$9 - 4519 | 0;
            if (var$7 >= 0 && var$7 < 28) {
                var$5[2] = var$9 & 65535;
                $this.$lexemes.$next0();
                return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 2);
        }
        if (!jur_Pattern_hasFlag($this, 2))
            return jur_CharSet__init_(var$5[0]);
        if (jur_Pattern_hasFlag($this, 64))
            return jur_UCICharSet__init_0(var$5[0]);
        return jur_CICharSet__init_(var$5[0]);
    }
    var$10 = 1;
    while (var$10 < 4 && !$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter0()) {
        var$5 = $codePoints.data;
        var$9 = var$10 + 1 | 0;
        var$5[var$10] = $this.$lexemes.$next0();
        var$10 = var$9;
    }
    if (var$10 == 1) {
        var$5 = $codePoints.data;
        if (!jur_Lexer_hasSingleCodepointDecomposition(var$5[0]))
            return jur_Pattern_processCharSet($this, var$5[0]);
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_DecomposedCharSet__init_0($codePoints, var$10);
    if (jur_Pattern_hasFlag($this, 64))
        return jur_UCIDecomposedCharSet__init_0($codePoints, var$10);
    return jur_CIDecomposedCharSet__init_0($codePoints, var$10);
},
jur_Pattern_processSubExpression = ($this, $last) => {
    let $cur, $term, var$4, $next;
    if ($this.$lexemes.$isLetter0() && !$this.$lexemes.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead())) {
        if (!jur_Pattern_hasFlag($this, 128)) {
            if (!$this.$lexemes.$isHighSurrogate0() && !$this.$lexemes.$isLowSurrogate0())
                $cur = jur_Pattern_processSequence($this);
            else {
                $term = jur_Pattern_processTerminal($this, $last);
                $cur = jur_Pattern_processQuantifier($this, $last, $term);
            }
        } else {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!$this.$lexemes.$isEmpty()) {
                var$4 = $this.$lexemes;
                if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                    var$4 = $this.$lexemes;
                    if (var$4.$peek() != (-536870788) && !$this.$lexemes.$isLetter0())
                        $cur = jur_Pattern_processQuantifier($this, $last, $cur);
                }
            }
        }
    } else if ($this.$lexemes.$peek() != (-536870871)) {
        $term = jur_Pattern_processTerminal($this, $last);
        $cur = jur_Pattern_processQuantifier($this, $last, $term);
    } else {
        if ($last instanceof jur_FinalSet)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
        $cur = jur_EmptySet__init_($last);
    }
    a: {
        if (!$this.$lexemes.$isEmpty()) {
            var$4 = $this.$lexemes;
            if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                var$4 = $this.$lexemes;
                if (var$4.$peek() != (-536870788)) {
                    $next = jur_Pattern_processSubExpression($this, $last);
                    if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
                        var$4 = $cur;
                        if (!$next.$first(var$4.$getInnerSet()))
                            $cur = jur_UnifiedQuantifierSet__init_0(var$4);
                    }
                    if (($next.$getType() & 65535) != 43)
                        $cur.$setNext($next);
                    else
                        $cur.$setNext($next.$getInnerSet());
                    break a;
                }
            }
        }
        if ($cur === null)
            return null;
        $cur.$setNext($last);
    }
    if (($cur.$getType() & 65535) != 43)
        return $cur;
    return $cur.$getInnerSet();
},
jur_Pattern_processQuantifier = ($this, $last, $term) => {
    let $quant, var$4, var$5, var$6, $q, var$8, $leaf;
    $quant = $this.$lexemes.$peek();
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                $this.$lexemes.$next0();
                return jur_PossessiveGroupQuantifierSet__init_0($term, $last, $quant);
            case -2147483605:
                $this.$lexemes.$next0();
                return jur_PosPlusGroupQuantifierSet__init_0($term, $last, (-2147483606));
            case -2147483585:
                $this.$lexemes.$next0();
                return jur_PosAltGroupQuantifierSet__init_0($term, $last, (-536870849));
            case -2147483525:
                var$4 = new jur_PosCompositeGroupQuantifierSet;
                var$5 = $this.$lexemes.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_PosCompositeGroupQuantifierSet__init_(var$4, var$5, $term, $last, (-536870849), var$6);
                return var$4;
            case -1073741782:
            case -1073741781:
                $this.$lexemes.$next0();
                $q = jur_ReluctantGroupQuantifierSet__init_0($term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                $this.$lexemes.$next0();
                $q = jur_RelAltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q = new jur_RelCompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$8 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$8;
                jur_RelCompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$8);
                $term.$setNext($q);
                return $q;
            case -536870870:
            case -536870869:
                $this.$lexemes.$next0();
                $q = $term.$getType() != (-2147483602) ? jur_GroupQuantifierSet__init_0($term, $last, $quant) : jur_Pattern_hasFlag($this, 32) ? jur_DotAllQuantifierSet__init_0($term, $last, $quant) : jur_DotQuantifierSet__init_0($term, $last, $quant, jur_AbstractLineTerminator_getInstance($this.$flags));
                $term.$setNext($q);
                return $q;
            case -536870849:
                $this.$lexemes.$next0();
                $q = jur_AltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q = new jur_CompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_CompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$6);
                $term.$setNext($q);
                return $q;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            $this.$lexemes.$next0();
            $q = jur_PossessiveQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -2147483585:
            $this.$lexemes.$next0();
            return jur_PossessiveAltQuantifierSet__init_0($leaf, $last, (-2147483585));
        case -2147483525:
            return jur_PossessiveCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-2147483525));
        case -1073741782:
        case -1073741781:
            $this.$lexemes.$next0();
            $q = jur_ReluctantQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -1073741761:
            $this.$lexemes.$next0();
            return jur_ReluctantAltQuantifierSet__init_0($leaf, $last, (-1073741761));
        case -1073741701:
            return jur_ReluctantCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-1073741701));
        case -536870870:
        case -536870869:
            $this.$lexemes.$next0();
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -536870849:
            $this.$lexemes.$next0();
            return jur_AltQuantifierSet__init_0($leaf, $last, (-536870849));
        case -536870789:
            return jur_CompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-536870789));
        default:
    }
    return $term;
},
jur_Pattern_processTerminal = ($this, $last) => {
    let $term, $ch, $newFlags, var$5, $negative, $cc, $number, var$9, var$10, var$11;
    $term = null;
    while (true) {
        a: {
            $ch = $this.$lexemes.$peek();
            if (($ch & (-2147418113)) == (-2147483608)) {
                $this.$lexemes.$next0();
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    if ($this.$lexemes.$peek() != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                }
            } else {
                b: {
                    c: {
                        switch ($ch) {
                            case -2147483599:
                            case -2147483598:
                            case -2147483597:
                            case -2147483596:
                            case -2147483595:
                            case -2147483594:
                            case -2147483593:
                            case -2147483592:
                            case -2147483591:
                                break c;
                            case -2147483583:
                                break;
                            case -2147483582:
                                $this.$lexemes.$next0();
                                $term = jur_WordBoundary__init_(0);
                                break a;
                            case -2147483577:
                                $this.$lexemes.$next0();
                                $term = jur_PreviousMatch__init_0();
                                break a;
                            case -2147483558:
                                $this.$lexemes.$next0();
                                $term = new jur_EOLSet;
                                var$5 = $this.$consCount0 + 1 | 0;
                                $this.$consCount0 = var$5;
                                jur_EOLSet__init_($term, var$5);
                                break a;
                            case -2147483550:
                                $this.$lexemes.$next0();
                                $term = jur_WordBoundary__init_(1);
                                break a;
                            case -2147483526:
                                $this.$lexemes.$next0();
                                $term = jur_EOISet__init_0();
                                break a;
                            case -536870876:
                                $this.$lexemes.$next0();
                                $this.$consCount0 = $this.$consCount0 + 1 | 0;
                                if (jur_Pattern_hasFlag($this, 8)) {
                                    if (jur_Pattern_hasFlag($this, 1)) {
                                        $term = jur_UMultiLineEOLSet__init_0($this.$consCount0);
                                        break a;
                                    }
                                    $term = jur_MultiLineEOLSet__init_0($this.$consCount0);
                                    break a;
                                }
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UEOLSet__init_0($this.$consCount0);
                                    break a;
                                }
                                $term = jur_EOLSet__init_0($this.$consCount0);
                                break a;
                            case -536870866:
                                $this.$lexemes.$next0();
                                if (jur_Pattern_hasFlag($this, 32)) {
                                    $term = jur_DotAllSet__init_0();
                                    break a;
                                }
                                $term = jur_DotSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case -536870821:
                                $this.$lexemes.$next0();
                                $negative = 0;
                                if ($this.$lexemes.$peek() == (-536870818)) {
                                    $negative = 1;
                                    $this.$lexemes.$next0();
                                }
                                $term = jur_Pattern_processRange($this, $negative, $last);
                                if ($this.$lexemes.$peek() != (-536870819))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                                $this.$lexemes.$setMode(1);
                                $this.$lexemes.$next0();
                                break a;
                            case -536870818:
                                $this.$lexemes.$next0();
                                $this.$consCount0 = $this.$consCount0 + 1 | 0;
                                if (!jur_Pattern_hasFlag($this, 8)) {
                                    $term = jur_SOLSet__init_0();
                                    break a;
                                }
                                $term = jur_MultiLineSOLSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case 0:
                                $cc = $this.$lexemes.$peekSpecial();
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if ($this.$lexemes.$isEmpty()) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                $this.$lexemes.$next0();
                                break a;
                            default:
                                break b;
                        }
                        $this.$lexemes.$next0();
                        $term = jur_SOLSet__init_0();
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                    $this.$consCount0 = $this.$consCount0 + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_0($number, $this.$consCount0) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_0($number, $this.$consCount0) : jur_CIBackReferenceSet__init_0($number, $this.$consCount0);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !$this.$lexemes.$isSpecial()) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    $this.$lexemes.$next0();
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        var$9 = new jur_PatternSyntaxException;
                        var$10 = !$this.$lexemes.$isSpecial() ? jl_Character_toString($ch & 65535) : ($this.$lexemes.$peekSpecial()).$toString();
                        var$11 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0(var$9, var$10, var$11.$toString(), $this.$lexemes.$getIndex());
                        $rt_throw(var$9);
                    }
                    if ($last instanceof jur_FinalSet)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
},
jur_Pattern_processRange = ($this, $negative, $last) => {
    let $res, $rangeSet;
    $res = jur_Pattern_processRangeExpression($this, $negative);
    $rangeSet = jur_Pattern_processRangeSet($this, $res);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processRangeExpression = ($this, $alt) => {
    let $res, $buffer, $intersection, $notClosed, $firstInClass, var$7, $cur, $negative, $cs, $$je;
    $res = jur_CharClass__init_3($alt, jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: while (true) {
                if ($this.$lexemes.$isEmpty())
                    break a;
                $notClosed = $this.$lexemes.$peek() == (-536870819) && !$firstInClass ? 0 : 1;
                if (!$notClosed)
                    break a;
                d: {
                    switch ($this.$lexemes.$peek()) {
                        case -536870874:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = $this.$lexemes.$next0();
                            if ($this.$lexemes.$peek() != (-536870874)) {
                                $buffer = 38;
                                break d;
                            }
                            if ($this.$lexemes.$lookAhead() == (-536870821)) {
                                $this.$lexemes.$next0();
                                $intersection = 1;
                                $buffer = (-1);
                                break d;
                            }
                            $this.$lexemes.$next0();
                            if ($firstInClass) {
                                $res = jur_Pattern_processRangeExpression($this, 0);
                                break d;
                            }
                            if ($this.$lexemes.$peek() == (-536870819))
                                break d;
                            $res.$intersection(jur_Pattern_processRangeExpression($this, 0));
                            break d;
                        case -536870867:
                            if (!$firstInClass && $this.$lexemes.$lookAhead() != (-536870819)) {
                                var$7 = $this.$lexemes;
                                if (var$7.$lookAhead() != (-536870821) && $buffer >= 0) {
                                    $this.$lexemes.$next0();
                                    $cur = $this.$lexemes.$peek();
                                    if ($this.$lexemes.$isSpecial())
                                        break c;
                                    if ($cur < 0) {
                                        var$7 = $this.$lexemes;
                                        if (var$7.$lookAhead() != (-536870819)) {
                                            var$7 = $this.$lexemes;
                                            if (var$7.$lookAhead() != (-536870821) && $buffer >= 0)
                                                break c;
                                        }
                                    }
                                    e: {
                                        try {
                                            if (jur_Lexer_isLetter($cur))
                                                break e;
                                            $cur = $cur & 65535;
                                            break e;
                                        } catch ($$e) {
                                            $$je = $rt_wrapException($$e);
                                            if ($$je instanceof jl_Exception) {
                                                break b;
                                            } else {
                                                throw $$e;
                                            }
                                        }
                                    }
                                    try {
                                        $res.$add0($buffer, $cur);
                                    } catch ($$e) {
                                        $$je = $rt_wrapException($$e);
                                        if ($$je instanceof jl_Exception) {
                                            break b;
                                        } else {
                                            throw $$e;
                                        }
                                    }
                                    $this.$lexemes.$next0();
                                    $buffer = (-1);
                                    break d;
                                }
                            }
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 45;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870821:
                            if ($buffer >= 0) {
                                $res.$add($buffer);
                                $buffer = (-1);
                            }
                            $this.$lexemes.$next0();
                            $negative = 0;
                            if ($this.$lexemes.$peek() == (-536870818)) {
                                $this.$lexemes.$next0();
                                $negative = 1;
                            }
                            if (!$intersection)
                                $res.$union(jur_Pattern_processRangeExpression($this, $negative));
                            else
                                $res.$intersection(jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870819:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 93;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870818:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 94;
                            $this.$lexemes.$next0();
                            break d;
                        case 0:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $cs = $this.$lexemes.$peekSpecial();
                            if ($cs === null)
                                $buffer = 0;
                            else {
                                $res.$add3($cs);
                                $buffer = (-1);
                            }
                            $this.$lexemes.$next0();
                            break d;
                        default:
                    }
                    if ($buffer >= 0)
                        $res.$add($buffer);
                    $buffer = $this.$lexemes.$next0();
                }
                $firstInClass = 0;
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
    }
    if (!$notClosed) {
        if ($buffer >= 0)
            $res.$add($buffer);
        return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), jur_Pattern_pattern($this), $this.$lexemes.$getIndex() - 1 | 0));
},
jur_Pattern_processCharSet = ($this, $ch) => {
    let $isSupplCodePoint;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if ($isSupplCodePoint)
                return jur_UCISupplCharSet__init_0($ch);
            if (jur_Lexer_isLowSurrogate($ch))
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            if (!jur_Lexer_isHighSurrogate($ch))
                return jur_UCICharSet__init_0($ch & 65535);
            return jur_HighSurrogateCharSet__init_0($ch & 65535);
        }
    }
    if ($isSupplCodePoint)
        return jur_SupplCharSet__init_0($ch);
    if (jur_Lexer_isLowSurrogate($ch))
        return jur_LowSurrogateCharSet__init_($ch & 65535);
    if (!jur_Lexer_isHighSurrogate($ch))
        return jur_CharSet__init_($ch & 65535);
    return jur_HighSurrogateCharSet__init_0($ch & 65535);
},
jur_Pattern_processRangeSet = ($this, $charClass) => {
    let $surrogates, $lowHighSurrRangeSet;
    if (!$charClass.$hasLowHighSurrogates()) {
        if (!$charClass.$mayContainSupplCodepoints()) {
            if ($charClass.$hasUCI())
                return jur_UCIRangeSet__init_0($charClass);
            return jur_RangeSet__init_0($charClass);
        }
        if ($charClass.$hasUCI())
            return jur_UCISupplRangeSet__init_($charClass);
        return jur_SupplRangeSet__init_0($charClass);
    }
    $surrogates = $charClass.$getSurrogates();
    $lowHighSurrRangeSet = jur_LowHighSurrogateRangeSet__init_0($surrogates);
    if (!$charClass.$mayContainSupplCodepoints()) {
        if ($charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_RangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
    }
    if ($charClass.$hasUCI())
        return jur_CompositeRangeSet__init_(jur_UCISupplRangeSet__init_($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
    return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
},
jur_Pattern_compile = $pattern => {
    return jur_Pattern_compile0($pattern, 0);
},
jur_Pattern_finalizeCompile = $this => {
    if ($this.$needsBackRefReplacement)
        $this.$start1.$processSecondPass();
},
jur_Pattern_quote = $s => {
    let $sb, $apos, var$4, $apos_0;
    $sb = (jl_StringBuilder__init_()).$append12($rt_s(440));
    $apos = 0;
    while (true) {
        var$4 = $s.$indexOf0($rt_s(441), $apos);
        if (var$4 < 0)
            break;
        $apos_0 = var$4 + 2 | 0;
        ($sb.$append12($s.$substring($apos, $apos_0))).$append12($rt_s(442));
        $apos = $apos_0;
    }
    return (($sb.$append12($s.$substring0($apos))).$append12($rt_s(441))).$toString();
},
jur_Pattern_groupCount = $this => {
    return $this.$globalGroupIndex;
},
jur_Pattern_compCount = $this => {
    return $this.$compCount0 + 1 | 0;
},
jur_Pattern_consCount = $this => {
    return $this.$consCount0 + 1 | 0;
},
jur_Pattern_getSupplement = $ch => {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
},
jur_Pattern_hasFlag = ($this, $flag) => {
    return ($this.$flags & $flag) != $flag ? 0 : 1;
},
jur_Pattern__init_ = $this => {
    jl_Object__init_($this);
    $this.$backRefs = $rt_createArray(jur_FSet, 10);
    $this.$globalGroupIndex = (-1);
    $this.$compCount0 = (-1);
    $this.$consCount0 = (-1);
},
jur_Pattern__init_0 = () => {
    let var_0 = new jur_Pattern();
    jur_Pattern__init_(var_0);
    return var_0;
},
jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_PosAltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltGroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosAltGroupQuantifierSet();
    jur_PosAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next1.$matches($nextIndex, $testString, $matchResult);
},
jur_PosAltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
cwte_KeyboardEventHandler = $rt_classWithoutFields(0),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
cwth_DomBuilder$Label = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$Label__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(443));
},
cwth_DomBuilder$Label__init_0 = () => {
    let var_0 = new cwth_DomBuilder$Label();
    cwth_DomBuilder$Label__init_(var_0);
    return var_0;
},
cwth_DomBuilder$Label_create = () => {
    return cwth_DomBuilder$Label__init_0();
};
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
let jur_UMultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
},
jur_UMultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UMultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if ($strDif <= 0) {
        $matchResult.$setConsumed($this.$consCounter2, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($testString.$charAt($strIndex) != 10)
        return (-1);
    $matchResult.$setConsumed($this.$consCounter2, 1);
    return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
},
jur_UMultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter2) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter2, (-1));
    return $res;
};
function cwtd_App$renderUseRefDemo$lambda$_15_0() {
    jl_Object.call(this);
    this.$_03 = null;
}
let cwtd_App$renderUseRefDemo$lambda$_15_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_03 = var$1;
},
cwtd_App$renderUseRefDemo$lambda$_15_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderUseRefDemo$lambda$_15_0();
    cwtd_App$renderUseRefDemo$lambda$_15_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderUseRefDemo$lambda$_15_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderUseRefDemo$38(var$0.$_03, var$1);
},
cwtd_App$renderUseRefDemo$lambda$_15_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start2 = 0;
    a.$end1 = 0;
    a.$data0 = null;
}
let otciu_UnicodeHelper$Range__init_ = ($this, $start, $end, $data) => {
    jl_Object__init_($this);
    $this.$start2 = $start;
    $this.$end1 = $end;
    $this.$data0 = $data;
},
otciu_UnicodeHelper$Range__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
let jur_EOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
},
jur_EOLSet__init_0 = var_0 => {
    let var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
},
jur_EOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, var$5, var$6, $ch;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex >= $rightBound) {
        $matchResult.$setConsumed($this.$consCounter0, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    var$5 = $rightBound - $strIndex | 0;
    if (var$5 == 2 && $testString.$charAt($strIndex) == 13) {
        var$6 = $strIndex + 1 | 0;
        if ($testString.$charAt(var$6) == 10) {
            $matchResult.$setConsumed($this.$consCounter0, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        }
    }
    a: {
        if (var$5 == 1) {
            $ch = $testString.$charAt($strIndex);
            if ($ch == 10)
                break a;
            if ($ch == 13)
                break a;
            if ($ch == 133)
                break a;
            if (($ch | 1) == 8233)
                break a;
        }
        return (-1);
    }
    $matchResult.$setConsumed($this.$consCounter0, 0);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_EOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter0) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter0, (-1));
    return $res;
},
jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$2__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$2__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$2();
    jur_AbstractLineTerminator$2__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$2_isLineTerminator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_AbstractLineTerminator$2_isAfterLineTerminator = ($this, $ch, $ch2) => {
    let var$3;
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            var$3 = 1;
            break a;
        }
        var$3 = 0;
    }
    return var$3;
};
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable0 = null;
    a.$fastTable = null;
}
let otciu_CharMapping__init_ = ($this, $binarySearchTable, $fastTable) => {
    jl_Object__init_($this);
    $this.$binarySearchTable0 = $binarySearchTable;
    $this.$fastTable = $fastTable;
},
otciu_CharMapping__init_0 = (var_0, var_1) => {
    let var_2 = new otciu_CharMapping();
    otciu_CharMapping__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$1__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$1__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$1();
    jur_AbstractLineTerminator$1__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$1_isLineTerminator = ($this, $ch) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$1_isAfterLineTerminator = ($this, $ch, $ch2) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_Lexer() {
    let a = this; jl_Object.call(a);
    a.$pattern0 = null;
    a.$flags0 = 0;
    a.$mode0 = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead0 = 0;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
let jur_Lexer_decompTable = null,
jur_Lexer_singleDecompTable = null,
jur_Lexer_singleDecompTableSize = 0,
jur_Lexer__init_ = ($this, $pattern, $flags) => {
    jl_Object__init_($this);
    $this.$mode0 = 1;
    $this.$orig = $pattern;
    if (($flags & 16) > 0)
        $pattern = jur_Pattern_quote($pattern);
    else if (($flags & 128) > 0)
        $pattern = jur_Lexer_normalize($pattern);
    $this.$pattern0 = $rt_createCharArray($pattern.$length() + 2 | 0);
    jl_System_fastArraycopy($pattern.$toCharArray(), 0, $this.$pattern0, 0, $pattern.$length());
    $this.$pattern0.data[$this.$pattern0.data.length - 1 | 0] = 0;
    $this.$pattern0.data[$this.$pattern0.data.length - 2 | 0] = 0;
    $this.$patternFullLength = $this.$pattern0.data.length;
    $this.$flags0 = $flags;
    jur_Lexer_movePointer($this);
    jur_Lexer_movePointer($this);
},
jur_Lexer__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Lexer();
    jur_Lexer__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Lexer_peek = $this => {
    return $this.$ch;
},
jur_Lexer_setMode = ($this, $mode) => {
    if ($mode > 0 && $mode < 3)
        $this.$mode0 = $mode;
    if ($mode == 1)
        jur_Lexer_reread($this);
},
jur_Lexer_restoreFlags = ($this, $flags) => {
    $this.$flags0 = $flags;
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$curToc + 1 | 0;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_peekSpecial = $this => {
    return $this.$curST;
},
jur_Lexer_isSpecial = $this => {
    return $this.$curST === null ? 0 : 1;
},
jur_Lexer_isNextSpecial = $this => {
    return $this.$lookAheadST === null ? 0 : 1;
},
jur_Lexer_next = $this => {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
},
jur_Lexer_nextSpecial = $this => {
    let $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
},
jur_Lexer_lookAhead = $this => {
    return $this.$lookAhead0;
},
jur_Lexer_back = $this => {
    return $this.$lookBack;
},
jur_Lexer_normalize = $input => {
    return $input;
},
jur_Lexer_reread = $this => {
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_movePointer = $this => {
    let $reread, $nonCap, $behind, $mod, var$5, $cs, $negative, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead0;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index;
    while (true) {
        $reread = 0;
        $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : jur_Lexer_nextCodePoint($this);
        $this.$lookAheadST = null;
        if ($this.$mode0 == 4) {
            if ($this.$lookAhead0 != 92)
                return;
            $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : $this.$pattern0.data[jur_Lexer_nextIndex($this)];
            switch ($this.$lookAhead0) {
                case 69:
                    break;
                default:
                    $this.$lookAhead0 = 92;
                    $this.$index = $this.$prevNW;
                    return;
            }
            $this.$mode0 = $this.$savedMode;
            $this.$lookAhead0 = $this.$index > ($this.$pattern0.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
        }
        a: {
            if ($this.$lookAhead0 != 92) {
                if ($this.$mode0 == 1)
                    switch ($this.$lookAhead0) {
                        case 36:
                            $this.$lookAhead0 = (-536870876);
                            break a;
                        case 40:
                            if ($this.$pattern0.data[$this.$index] != 63) {
                                $this.$lookAhead0 = (-2147483608);
                                break a;
                            }
                            jur_Lexer_nextIndex($this);
                            $nonCap = $this.$pattern0.data[$this.$index];
                            $behind = 0;
                            while (true) {
                                b: {
                                    if ($behind) {
                                        $behind = 0;
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 61:
                                                $this.$lookAhead0 = (-134217688);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                                        }
                                        $this.$lookAhead0 = (-67108824);
                                        jur_Lexer_nextIndex($this);
                                    } else {
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 60:
                                                jur_Lexer_nextIndex($this);
                                                $nonCap = $this.$pattern0.data[$this.$index];
                                                $behind = 1;
                                                break b;
                                            case 61:
                                                $this.$lookAhead0 = (-536870872);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            case 62:
                                                $this.$lookAhead0 = (-33554392);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $this.$lookAhead0 = jur_Lexer_readFlags($this);
                                                if ($this.$lookAhead0 < 256) {
                                                    $this.$flags0 = $this.$lookAhead0;
                                                    $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                                    $this.$lookAhead0 = (-1073741784) | $this.$lookAhead0;
                                                    break b;
                                                }
                                                $this.$lookAhead0 = $this.$lookAhead0 & 255;
                                                $this.$flags0 = $this.$lookAhead0;
                                                $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                                $this.$lookAhead0 = (-16777176) | $this.$lookAhead0;
                                                break b;
                                        }
                                        $this.$lookAhead0 = (-268435416);
                                        jur_Lexer_nextIndex($this);
                                    }
                                }
                                if (!$behind)
                                    break;
                            }
                            break a;
                        case 41:
                            $this.$lookAhead0 = (-536870871);
                            break a;
                        case 42:
                        case 43:
                        case 63:
                            $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
                            switch ($mod) {
                                case 43:
                                    $this.$lookAhead0 = $this.$lookAhead0 | (-2147483648);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                case 63:
                                    $this.$lookAhead0 = $this.$lookAhead0 | (-1073741824);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                default:
                            }
                            $this.$lookAhead0 = $this.$lookAhead0 | (-536870912);
                            break a;
                        case 46:
                            $this.$lookAhead0 = (-536870866);
                            break a;
                        case 91:
                            $this.$lookAhead0 = (-536870821);
                            $this.$setMode(2);
                            break a;
                        case 93:
                            if ($this.$mode0 != 2)
                                break a;
                            $this.$lookAhead0 = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead0 = (-536870818);
                            break a;
                        case 123:
                            $this.$lookAheadST = jur_Lexer_processQuantifier($this, $this.$lookAhead0);
                            break a;
                        case 124:
                            $this.$lookAhead0 = (-536870788);
                            break a;
                        default:
                    }
                else if ($this.$mode0 == 2)
                    switch ($this.$lookAhead0) {
                        case 38:
                            $this.$lookAhead0 = (-536870874);
                            break a;
                        case 45:
                            $this.$lookAhead0 = (-536870867);
                            break a;
                        case 91:
                            $this.$lookAhead0 = (-536870821);
                            break a;
                        case 93:
                            $this.$lookAhead0 = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead0 = (-536870818);
                            break a;
                        default:
                    }
            } else {
                var$5 = $this.$index >= ($this.$pattern0.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                c: {
                    $this.$lookAhead0 = var$5;
                    switch ($this.$lookAhead0) {
                        case -1:
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                        case 41:
                        case 42:
                        case 43:
                        case 44:
                        case 45:
                        case 46:
                        case 47:
                        case 58:
                        case 59:
                        case 60:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 91:
                        case 92:
                        case 93:
                        case 94:
                        case 95:
                        case 96:
                        case 118:
                            break;
                        case 48:
                            $this.$lookAhead0 = jur_Lexer_readOctals($this);
                            break a;
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            if ($this.$mode0 != 1)
                                break a;
                            $this.$lookAhead0 = (-2147483648) | $this.$lookAhead0;
                            break a;
                        case 65:
                            $this.$lookAhead0 = (-2147483583);
                            break a;
                        case 66:
                            $this.$lookAhead0 = (-2147483582);
                            break a;
                        case 67:
                        case 69:
                        case 70:
                        case 72:
                        case 73:
                        case 74:
                        case 75:
                        case 76:
                        case 77:
                        case 78:
                        case 79:
                        case 82:
                        case 84:
                        case 85:
                        case 86:
                        case 88:
                        case 89:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 107:
                        case 108:
                        case 109:
                        case 111:
                        case 113:
                        case 121:
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                        case 68:
                        case 83:
                        case 87:
                        case 100:
                        case 115:
                        case 119:
                            $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_1($this.$pattern0, $this.$prevNW, 1), 0);
                            $this.$lookAhead0 = 0;
                            break a;
                        case 71:
                            $this.$lookAhead0 = (-2147483577);
                            break a;
                        case 80:
                        case 112:
                            break c;
                        case 81:
                            $this.$savedMode = $this.$mode0;
                            $this.$mode0 = 4;
                            $reread = 1;
                            break a;
                        case 90:
                            $this.$lookAhead0 = (-2147483558);
                            break a;
                        case 97:
                            $this.$lookAhead0 = 7;
                            break a;
                        case 98:
                            $this.$lookAhead0 = (-2147483550);
                            break a;
                        case 99:
                            if ($this.$index >= ($this.$pattern0.data.length - 2 | 0))
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                            $this.$lookAhead0 = $this.$pattern0.data[jur_Lexer_nextIndex($this)] & 31;
                            break a;
                        case 101:
                            $this.$lookAhead0 = 27;
                            break a;
                        case 102:
                            $this.$lookAhead0 = 12;
                            break a;
                        case 110:
                            $this.$lookAhead0 = 10;
                            break a;
                        case 114:
                            $this.$lookAhead0 = 13;
                            break a;
                        case 116:
                            $this.$lookAhead0 = 9;
                            break a;
                        case 117:
                            $this.$lookAhead0 = jur_Lexer_readHex($this, 4);
                            break a;
                        case 120:
                            $this.$lookAhead0 = jur_Lexer_readHex($this, 2);
                            break a;
                        case 122:
                            $this.$lookAhead0 = (-2147483526);
                            break a;
                        default:
                    }
                    break a;
                }
                $cs = jur_Lexer_parseCharClassName($this);
                $negative = 0;
                if ($this.$lookAhead0 == 80)
                    $negative = 1;
                try {
                    $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof ju_MissingResourceException) {
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                    } else {
                        throw $$e;
                    }
                }
                $this.$lookAhead0 = 0;
            }
        }
        if ($reread)
            continue;
        else
            break;
    }
},
jur_Lexer_parseCharClassName = $this => {
    let $sb, var$2, var$3, $ch, $res;
    $sb = jl_StringBuilder__init_0(10);
    if ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
        if ($this.$pattern0.data[$this.$index] != 123) {
            var$2 = jl_String__init_1($this.$pattern0, jur_Lexer_nextIndex($this), 1);
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(444)), var$2);
            return jl_StringBuilder_toString(var$3);
        }
        jur_Lexer_nextIndex($this);
        $ch = 0;
        a: {
            while ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
                $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break a;
                $sb.$append0($ch);
            }
        }
        if ($ch != 125)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    }
    if (!$sb.$length())
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    $res = $sb.$toString();
    if ($res.$length() == 1) {
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(444)), $res);
        return jl_StringBuilder_toString(var$2);
    }
    b: {
        c: {
            if ($res.$length() > 3) {
                if ($res.$startsWith1($rt_s(444)))
                    break c;
                if ($res.$startsWith1($rt_s(445)))
                    break c;
            }
            break b;
        }
        $res = $res.$substring0(2);
    }
    return $res;
},
jur_Lexer_processQuantifier = ($this, $ch) => {
    let $sb, $min, $max, $mod, $$je;
    $sb = jl_StringBuilder__init_0(4);
    $min = (-1);
    $max = 2147483647;
    a: {
        while (true) {
            if ($this.$index >= $this.$pattern0.data.length)
                break a;
            $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
            if ($ch == 125)
                break a;
            if ($ch == 44 && $min < 0)
                try {
                    $min = jl_Integer_parseInt($sb.$toString(), 10);
                    $sb.$delete0(0, $sb.$length());
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            $sb.$append0($ch & 65535);
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    }
    if ($ch != 125)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    if ($sb.$length() > 0)
        b: {
            try {
                $max = jl_Integer_parseInt($sb.$toString(), 10);
                if ($min >= 0)
                    break b;
                $min = $max;
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                } else {
                    throw $$e;
                }
            }
        }
    else if ($min < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    if (($min | $max | ($max - $min | 0)) < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
    $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
    c: {
        switch ($mod) {
            case 43:
                $this.$lookAhead0 = (-2147483525);
                jur_Lexer_nextIndex($this);
                break c;
            case 63:
                $this.$lookAhead0 = (-1073741701);
                jur_Lexer_nextIndex($this);
                break c;
            default:
        }
        $this.$lookAhead0 = (-536870789);
    }
    return jur_Quantifier__init_0($min, $max);
},
jur_Lexer_toString = $this => {
    return $this.$orig;
},
jur_Lexer_isEmpty = $this => {
    return !$this.$ch && !$this.$lookAhead0 && $this.$index == $this.$patternFullLength && !$this.$isSpecial() ? 1 : 0;
},
jur_Lexer_isLetter = $ch => {
    return $ch < 0 ? 0 : 1;
},
jur_Lexer_isLetter0 = $this => {
    return !$this.$isEmpty() && !$this.$isSpecial() && jur_Lexer_isLetter($this.$ch) ? 1 : 0;
},
jur_Lexer_isHighSurrogate0 = $this => {
    return $this.$ch <= 56319 && $this.$ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate0 = $this => {
    return $this.$ch <= 57343 && $this.$ch >= 56320 ? 1 : 0;
},
jur_Lexer_isHighSurrogate = $ch => {
    return $ch <= 56319 && $ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate = $ch => {
    return $ch <= 57343 && $ch >= 56320 ? 1 : 0;
},
jur_Lexer_readHex = ($this, $max) => {
    let $st, $length, $i, var$5, $$je;
    $st = jl_StringBuilder__init_0($max);
    $length = $this.$pattern0.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index >= $length)
            break;
        $st.$append0($this.$pattern0.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    if (!var$5)
        a: {
            try {
                var$5 = jl_Integer_parseInt($st.$toString(), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return var$5;
        }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
},
jur_Lexer_readOctals = $this => {
    let $max, $i, $length, $res, var$5;
    $max = 3;
    $i = 1;
    $length = $this.$pattern0.data.length - 2 | 0;
    $res = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if ($this.$index >= $length)
                        break a;
                    var$5 = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
                    if (var$5 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$5 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
},
jur_Lexer_readFlags = $this => {
    let $pos, $res, $ch;
    $pos = 1;
    $res = $this.$flags0;
    a: while (true) {
        if ($this.$index >= $this.$pattern0.data.length)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
        b: {
            c: {
                $ch = $this.$pattern0.data[$this.$index];
                switch ($ch) {
                    case 41:
                        jur_Lexer_nextIndex($this);
                        return $res | 256;
                    case 45:
                        if (!$pos)
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(9), $this.$toString(), $this.$index));
                        $pos = 0;
                        break b;
                    case 58:
                        break a;
                    case 100:
                        break c;
                    case 105:
                        $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                        break b;
                    case 109:
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    case 115:
                        $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                        break b;
                    case 117:
                        $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                        break b;
                    case 120:
                        $res = $pos ? $res | 4 : ($res ^ 4) & $res;
                        break b;
                    default:
                }
                break b;
            }
            $res = $pos ? $res | 1 : ($res ^ 1) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
},
jur_Lexer_nextIndex = $this => {
    $this.$prevNW = $this.$index;
    if ($this.$flags0 & 4)
        jur_Lexer_skipComments($this);
    else
        $this.$index = $this.$index + 1 | 0;
    return $this.$prevNW;
},
jur_Lexer_skipComments = $this => {
    let $length;
    $length = $this.$pattern0.data.length - 2 | 0;
    $this.$index = $this.$index + 1 | 0;
    a: while (true) {
        if ($this.$index < $length && jl_Character_isWhitespace0($this.$pattern0.data[$this.$index])) {
            $this.$index = $this.$index + 1 | 0;
            continue;
        }
        if ($this.$index >= $length)
            break;
        if ($this.$pattern0.data[$this.$index] != 35)
            break;
        $this.$index = $this.$index + 1 | 0;
        while (true) {
            if ($this.$index >= $length)
                continue a;
            if (jur_Lexer_isLineSeparator($this, $this.$pattern0.data[$this.$index]))
                continue a;
            $this.$index = $this.$index + 1 | 0;
        }
    }
    return $this.$index;
},
jur_Lexer_isLineSeparator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_Lexer_getDecomposition = $ch => {
    return jur_Lexer_decompTable.$get2($ch);
},
jur_Lexer_getHangulDecomposition = $ch => {
    let $sIndex, $l, $v, $t, $decomp, var$7;
    $sIndex = $ch - 44032 | 0;
    if ($sIndex >= 0 && $sIndex < 11172) {
        $l = 4352 + ($sIndex / 588 | 0) | 0;
        $v = 4449 + (($sIndex % 588 | 0) / 28 | 0) | 0;
        $t = $sIndex % 28 | 0;
        if (!$t)
            $decomp = $rt_createIntArrayFromData([$l, $v]);
        else {
            var$7 = 4519 + $t | 0;
            $decomp = $rt_createIntArrayFromData([$l, $v, var$7]);
        }
        return $decomp;
    }
    return null;
},
jur_Lexer_hasSingleCodepointDecomposition = $ch => {
    let $hasSingleDecomp;
    $hasSingleDecomp = jur_Lexer_singleDecompTable.$get1($ch);
    return $hasSingleDecomp == jur_Lexer_singleDecompTableSize ? 0 : 1;
},
jur_Lexer_hasDecompositionNonNullCanClass = $ch => {
    return ($ch != 832 ? 0 : 1) | ($ch != 833 ? 0 : 1) | ($ch != 835 ? 0 : 1) | ($ch != 836 ? 0 : 1);
},
jur_Lexer_nextCodePoint = $this => {
    let $high, $lowExpectedIndex, $low;
    $high = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        if ($lowExpectedIndex < $this.$pattern0.data.length) {
            $low = $this.$pattern0.data[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
},
jur_Lexer_getIndex = $this => {
    return $this.$curToc;
},
otjc_JSWeakRef = $rt_classWithoutFields(),
jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpecialsBlock__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpecialsBlock__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpecialsBlock_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(65279, 65279)).$add0(65520, 65533);
},
jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace),
jur_AbstractCharClass$LazyNonSpace__init_ = $this => {
    jur_AbstractCharClass$LazySpace__init_($this);
},
jur_AbstractCharClass$LazyNonSpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonSpace_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazySpace_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_ = ($this, $characters) => {
    jl_Object__init_($this);
    $this.$characters = $characters;
},
otci_CharFlow__init_0 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_(var_1, var_0);
    return var_1;
};
function cwtd_App$renderItemListBuilder$lambda$_13_0() {
    jl_Object.call(this);
    this.$_032 = null;
}
let cwtd_App$renderItemListBuilder$lambda$_13_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_032 = var$1;
},
cwtd_App$renderItemListBuilder$lambda$_13_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderItemListBuilder$lambda$_13_0();
    cwtd_App$renderItemListBuilder$lambda$_13_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderItemListBuilder$lambda$_13_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderItemListBuilder$32(var$0.$_032, var$1);
},
cwtd_App$renderItemListBuilder$lambda$_13_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function jur_RangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt1 = 0;
}
let jur_RangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance();
    $this.$alt1 = $cc.$alt;
},
jur_RangeSet__init_0 = var_0 => {
    let var_1 = new jur_RangeSet();
    jur_RangeSet__init_(var_1, var_0);
    return var_1;
},
jur_RangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars0.$contains($testString.$charAt($strIndex)) ? (-1) : 1;
},
jur_RangeSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars0, $set.$getChar());
    if ($set instanceof jur_RangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$getChars());
    if (!($set instanceof jur_SupplCharSet))
        return 1;
    return 0;
},
jur_RangeSet_getChars = $this => {
    return $this.$chars0;
};
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category = 0;
}
let jur_UnicodeCategory__init_ = ($this, $category) => {
    jur_AbstractCharClass__init_($this);
    $this.$category = $category;
},
jur_UnicodeCategory__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategory_contains = ($this, $ch) => {
    return $this.$alt ^ ($this.$category != jl_Character_getType0($ch & 65535) ? 0 : 1);
},
jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory),
jur_UnicodeCategoryScope__init_ = ($this, $category) => {
    jur_UnicodeCategory__init_($this, $category);
},
jur_UnicodeCategoryScope__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategoryScope();
    jur_UnicodeCategoryScope__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategoryScope_contains = ($this, $ch) => {
    return $this.$alt ^ (!($this.$category >> jl_Character_getType0($ch & 65535) & 1) ? 0 : 1);
};
function cwtd_App$renderTodoListFunctional$lambda$_6_2() {
    let a = this; jl_Object.call(a);
    a.$_029 = null;
    a.$_14 = null;
    a.$_21 = null;
    a.$_31 = null;
    a.$_40 = null;
}
let cwtd_App$renderTodoListFunctional$lambda$_6_2__init_ = (var$0, var$1, var$2, var$3, var$4, var$5) => {
    jl_Object__init_(var$0);
    var$0.$_029 = var$1;
    var$0.$_14 = var$2;
    var$0.$_21 = var$3;
    var$0.$_31 = var$4;
    var$0.$_40 = var$5;
},
cwtd_App$renderTodoListFunctional$lambda$_6_2__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new cwtd_App$renderTodoListFunctional$lambda$_6_2();
    cwtd_App$renderTodoListFunctional$lambda$_6_2__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
cwtd_App$renderTodoListFunctional$lambda$_6_2_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTodoListFunctional$22(var$0.$_029, var$0.$_14, var$0.$_21, var$0.$_31, var$0.$_40, var$1);
},
cwtd_App$renderTodoListFunctional$lambda$_6_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function cwtd_App$renderTodoListFunctional$lambda$_6_3() {
    let a = this; jl_Object.call(a);
    a.$_045 = null;
    a.$_16 = 0;
}
let cwtd_App$renderTodoListFunctional$lambda$_6_3__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_045 = var$1;
    var$0.$_16 = var$2;
},
cwtd_App$renderTodoListFunctional$lambda$_6_3__init_0 = (var_0, var_1) => {
    let var_2 = new cwtd_App$renderTodoListFunctional$lambda$_6_3();
    cwtd_App$renderTodoListFunctional$lambda$_6_3__init_(var_2, var_0, var_1);
    return var_2;
},
cwtd_App$renderTodoListFunctional$lambda$_6_3_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTodoListFunctional$18(var$0.$_045, var$0.$_16, var$1);
},
cwtd_App$renderTodoListFunctional$lambda$_6_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cwtd_App$renderTodoListFunctional$lambda$_6_4() {
    let a = this; jl_Object.call(a);
    a.$_09 = null;
    a.$_1 = null;
    a.$_2 = null;
    a.$_3 = 0;
}
let cwtd_App$renderTodoListFunctional$lambda$_6_4__init_ = (var$0, var$1, var$2, var$3, var$4) => {
    jl_Object__init_(var$0);
    var$0.$_09 = var$1;
    var$0.$_1 = var$2;
    var$0.$_2 = var$3;
    var$0.$_3 = var$4;
},
cwtd_App$renderTodoListFunctional$lambda$_6_4__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new cwtd_App$renderTodoListFunctional$lambda$_6_4();
    cwtd_App$renderTodoListFunctional$lambda$_6_4__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
cwtd_App$renderTodoListFunctional$lambda$_6_4_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTodoListFunctional$19(var$0.$_09, var$0.$_1, var$0.$_2, var$0.$_3, var$1);
},
cwtd_App$renderTodoListFunctional$lambda$_6_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent0(var$2);
};
function jur_CharClass() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
let jur_CharClass__init_2 = $this => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
},
jur_CharClass__init_ = () => {
    let var_0 = new jur_CharClass();
    jur_CharClass__init_2(var_0);
    return var_0;
},
jur_CharClass__init_0 = ($this, $ci, $uci) => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
    $this.$ci = $ci;
    $this.$uci = $uci;
},
jur_CharClass__init_4 = (var_0, var_1) => {
    let var_2 = new jur_CharClass();
    jur_CharClass__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass__init_1 = ($this, $negative, $ci, $uci) => {
    jur_CharClass__init_0($this, $ci, $uci);
    $this.$setNegative($negative);
},
jur_CharClass__init_3 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass();
    jur_CharClass__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass_add = ($this, $ch) => {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    $this.$bits.$clear(jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                $this.$bits.$set1(jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate($ch) && !jur_Lexer_isLowSurrogate($ch))) {
        if ($this.$invertedSurrogates)
            $this.$lowHighSurrogates.$clear($ch - 55296 | 0);
        else
            $this.$lowHighSurrogates.$set1($ch - 55296 | 0);
    }
    if ($this.$inverted)
        $this.$bits.$clear($ch);
    else
        $this.$bits.$set1($ch);
    if (!$this.$mayContainSupplCodepoints0 && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_CharClass_add1 = ($this, $cc) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $cc.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            $this.$lowHighSurrogates.$andNot($cc.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        $this.$lowHighSurrogates.$or($cc.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($cc.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$isNegative())
                $this.$bits.$andNot($cc.$getBits());
            else
                $this.$bits.$and($cc.$getBits());
        } else if (!$cc.$isNegative())
            $this.$bits.$or($cc.$getBits());
        else {
            $this.$bits.$xor($cc.$getBits());
            $this.$bits.$and($cc.$getBits());
            $this.$alt = $this.$alt ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$5__init_0($this, $curAlt, $nb, $cc);
            else
                $this.$nonBitSet = jur_CharClass$4__init_0($this, $curAlt, $nb, $cc);
        } else {
            if ($curAlt && !$this.$inverted && $this.$bits.$isEmpty())
                $this.$nonBitSet = jur_CharClass$1__init_0($this, $cc);
            else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$3__init_0($this, $curAlt, $cc);
            else
                $this.$nonBitSet = jur_CharClass$2__init_0($this, $curAlt, $cc);
            $this.$hideBits = 1;
        }
    }
    return $this;
},
jur_CharClass_add0 = ($this, $i, $end) => {
    if ($i > $end)
        $rt_throw(jl_IllegalArgumentException__init_());
    a: {
        b: {
            if (!$this.$ci) {
                if ($end < 55296)
                    break b;
                if ($i > 57343)
                    break b;
            }
            while (true) {
                if ($i >= ($end + 1 | 0))
                    break a;
                $this.$add($i);
                $i = $i + 1 | 0;
            }
        }
        if ($this.$inverted)
            $this.$bits.$clear0($i, $end + 1 | 0);
        else
            $this.$bits.$set($i, $end + 1 | 0);
    }
    return $this;
},
jur_CharClass_union = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
    } else if ($this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$or($clazz.$getBits());
            else
                $this.$bits.$and($clazz.$getBits());
        } else if ($this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$11__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$10__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!$this.$inverted && $this.$bits.$isEmpty()) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$7__init_0($this, $clazz);
                else
                    $this.$nonBitSet = jur_CharClass$6__init_0($this, $clazz);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$9__init_0($this, $clazz, $curAlt);
            else
                $this.$nonBitSet = jur_CharClass$8__init_0($this, $clazz, $curAlt);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_intersection = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
    } else if (!$this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$and($clazz.$getBits());
            else
                $this.$bits.$or($clazz.$getBits());
        } else if (!$this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 0;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$17__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$16__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!$this.$inverted && $this.$bits.$isEmpty()) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$13__init_0($this, $clazz);
                else
                    $this.$nonBitSet = jur_CharClass$12__init_0($this, $clazz);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$15__init_0($this, $clazz, $curAlt);
            else
                $this.$nonBitSet = jur_CharClass$14__init_0($this, $clazz, $curAlt);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_contains = ($this, $ch) => {
    if ($this.$nonBitSet !== null)
        return $this.$alt ^ $this.$nonBitSet.$contains($ch);
    return $this.$alt ^ $this.$bits.$get0($ch);
},
jur_CharClass_getBits = $this => {
    if (!$this.$hideBits)
        return $this.$bits;
    return null;
},
jur_CharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_CharClass_getInstance = $this => {
    let $bs, $res;
    if ($this.$nonBitSet !== null)
        return $this;
    $bs = $this.$getBits();
    $res = jur_CharClass$18__init_0($this, $bs);
    return $res.$setNegative($this.$isNegative());
},
jur_CharClass_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$bits.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append3(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$bits.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
},
jur_CharClass_hasUCI = $this => {
    return $this.$hasUCI0;
};
function cwtd_App$renderTodoListFunctional$lambda$_6_0() {
    jl_Object.call(this);
    this.$_02 = null;
}
let cwtd_App$renderTodoListFunctional$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_02 = var$1;
},
cwtd_App$renderTodoListFunctional$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cwtd_App$renderTodoListFunctional$lambda$_6_0();
    cwtd_App$renderTodoListFunctional$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cwtd_App$renderTodoListFunctional$lambda$_6_0_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTodoListFunctional$20(var$0.$_02, var$1);
},
cwtd_App$renderTodoListFunctional$lambda$_6_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function cwtd_App$renderTodoListFunctional$lambda$_6_1() {
    let a = this; jl_Object.call(a);
    a.$_018 = null;
    a.$_12 = null;
    a.$_20 = null;
    a.$_30 = null;
    a.$_4 = null;
}
let cwtd_App$renderTodoListFunctional$lambda$_6_1__init_ = (var$0, var$1, var$2, var$3, var$4, var$5) => {
    jl_Object__init_(var$0);
    var$0.$_018 = var$1;
    var$0.$_12 = var$2;
    var$0.$_20 = var$3;
    var$0.$_30 = var$4;
    var$0.$_4 = var$5;
},
cwtd_App$renderTodoListFunctional$lambda$_6_1__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new cwtd_App$renderTodoListFunctional$lambda$_6_1();
    cwtd_App$renderTodoListFunctional$lambda$_6_1__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
cwtd_App$renderTodoListFunctional$lambda$_6_1_handleEvent = (var$0, var$1) => {
    cwtd_App_lambda$renderTodoListFunctional$21(var$0.$_018, var$0.$_12, var$0.$_20, var$0.$_30, var$0.$_4, var$1);
},
cwtd_App$renderTodoListFunctional$lambda$_6_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent2(var$2);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$1(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$0(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_UCIDecomposedCharSet__init_ = ($this, $decomp, $decomposedCharLength) => {
    jur_DecomposedCharSet__init_($this, $decomp, $decomposedCharLength);
},
jur_UCIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIDecomposedCharSet();
    jur_UCIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
cwth_DomBuilder$H3 = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$H3__init_0 = $this => {
    cwth_DomBuilder__init_($this, $rt_s(446));
},
cwth_DomBuilder$H3__init_ = () => {
    let var_0 = new cwth_DomBuilder$H3();
    cwth_DomBuilder$H3__init_0(var_0);
    return var_0;
},
cwth_DomBuilder$H3_create = () => {
    return cwth_DomBuilder$H3__init_();
},
cwth_Hooks = $rt_classWithoutFields(),
cwth_Hooks_useState0 = $initial => {
    return cwth_StateHandle__init_(otji_JS_unwrapArray($rt_cls(otji_JSWrapper), cwth_Hooks_useStateInt$js_body$_17($initial)));
},
cwth_Hooks_useState = $initial => {
    return cwth_StateHandle__init_(otji_JS_unwrapArray($rt_cls(otji_JSWrapper), cwth_Hooks_useStateString$js_body$_18($rt_ustr($initial))));
},
cwth_Hooks_useState1 = $initial => {
    return cwth_StateHandle__init_(otji_JS_unwrapArray($rt_cls(otji_JSWrapper), cwth_Hooks_useStateBool$js_body$_19(!!$initial)));
},
cwth_Hooks_useEffect = $effect => {
    cwth_Hooks_useEffectNoDeps$js_body$_22(otji_JS_function($effect, "run"));
},
cwth_Hooks_useEffect0 = ($effect, $deps) => {
    cwth_Hooks_useEffectWithDeps$js_body$_23(otji_JS_function($effect, "run"), otji_JS_wrap($deps));
},
cwth_Hooks_useRefInt = $initial => {
    return cwth_RefHandle__init_0(React.useRef($initial));
},
cwth_Hooks_deps = () => {
    return otji_JS_unwrapArray($rt_cls(otji_JSWrapper), cwth_Hooks_emptyDeps$js_body$_31());
},
cwth_Hooks_useStateInt$js_body$_17 = var$1 => {
    var result = React.useState(var$1);
    return result;
},
cwth_Hooks_useStateString$js_body$_18 = var$1 => {
    var result = React.useState(var$1);
    return result;
},
cwth_Hooks_useStateBool$js_body$_19 = var$1 => {
    var result = React.useState(var$1);
    return result;
},
cwth_Hooks_useEffectNoDeps$js_body$_22 = var$1 => {
    React.useEffect(function() {
        var cleanup = var$1();
        return cleanup ? function() {
            cleanup();
        } : undefined;
    });
},
cwth_Hooks_useEffectWithDeps$js_body$_23 = (var$1, var$2) => {
    React.useEffect(function() {
        var cleanup = var$1();
        return cleanup ? function() {
            cleanup();
        } : undefined;
    }, var$2);
},
cwth_Hooks_emptyDeps$js_body$_31 = () => {
    return [];
},
cwth_DomBuilder$H4 = $rt_classWithoutFields(cwth_DomBuilder),
cwth_DomBuilder$H4__init_ = $this => {
    cwth_DomBuilder__init_($this, $rt_s(447));
},
cwth_DomBuilder$H4__init_0 = () => {
    let var_0 = new cwth_DomBuilder$H4();
    cwth_DomBuilder$H4__init_(var_0);
    return var_0;
},
cwth_DomBuilder$H4_create = () => {
    return cwth_DomBuilder$H4__init_0();
};
$rt_packages([-1, "java", 0, "util", 1, "regex", 0, "lang"
]);
$rt_metadata([jl_Object, "Object", 3, 0, [], 0, 3, 0, 0, ["$getClass0", $rt_wrapFunction0(jl_Object_getClass), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity)],
jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCharClass__init_), "$getValue", $rt_wrapFunction1(jur_AbstractCharClass$LazyCharClass_getValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Exception__init_0), "$_init_0", $rt_wrapFunction1(jl_Exception__init_)],
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_0", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_0), "$_init_0", $rt_wrapFunction1(jl_IndexOutOfBoundsException__init_2)],
jur_SpecialToken, 0, jl_Object, [], 1, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SpecialToken__init_)],
jur_AbstractCharClass, 0, jur_SpecialToken, [], 1, 0, 0, jur_AbstractCharClass_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass__init_), "$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$hasLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_hasLowHighSurrogates), "$mayContainSupplCodepoints", $rt_wrapFunction0(jur_AbstractCharClass_mayContainSupplCodepoints), "$getInstance", $rt_wrapFunction0(jur_AbstractCharClass_getInstance),
"$getSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getSurrogates), "$getWithoutSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getWithoutSurrogates), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI), "$setNegative", $rt_wrapFunction1(jur_AbstractCharClass_setNegative), "$isNegative", $rt_wrapFunction0(jur_AbstractCharClass_isNegative)],
jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_48", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
cwtc_RenderFunction, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, 0,
jur_AbstractSet, 0, jl_Object, [], 1, 0, 0, jur_AbstractSet_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractSet__init_), "$_init_8", $rt_wrapFunction1(jur_AbstractSet__init_0), "$find", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$setType", $rt_wrapFunction1(jur_AbstractSet_setType), "$getType", $rt_wrapFunction0(jur_AbstractSet_getType), "$getNext", $rt_wrapFunction0(jur_AbstractSet_getNext), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext),
"$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jur_JointSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_JointSet__init_), "$_init_22", $rt_wrapFunction2(jur_JointSet__init_0), "$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_SingleSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_6", $rt_wrapFunction2(jur_SingleSet__init_), "$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 1, 3, 0, 0, 0,
cwtc_ReactView$ViewFactory, 0, jl_Object, [], 3, 3, 0, 0, 0,
cwtd_App$renderApp$lambda$_2_11, 0, jl_Object, [cwtc_ReactView$ViewFactory], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_11__init_), "$create", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_11_create)],
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_SequenceSet$IntHash__init_0), "$put", $rt_wrapFunction2(jur_SequenceSet$IntHash_put), "$get1", $rt_wrapFunction1(jur_SequenceSet$IntHash_get)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)],
cwtd_App$renderApp$lambda$_2_12, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_12__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_12_render)],
cwtd_App$renderApp$lambda$_2_13, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_13__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_13_render)],
cwtd_App$renderApp$lambda$_2_14, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_14__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_14_render)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
cwte_ChangeEventHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cwtd_App$CharCounterView$render$lambda$_1_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_35", $rt_wrapFunction1(cwtd_App$CharCounterView$render$lambda$_1_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$CharCounterView$render$lambda$_1_0_handleEvent)],
jur_BackReferencedSingleSet, 0, jur_SingleSet, [], 0, 0, 0, 0, ["$_init_5", $rt_wrapFunction1(jur_BackReferencedSingleSet__init_), "$find", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
jur_CIBackReferenceSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_CIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$getString", $rt_wrapFunction1(jur_CIBackReferenceSet_getString), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)],
jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_AbstractCharClass$1, "AbstractCharClass$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_2", $rt_wrapFunction2(jur_AbstractCharClass$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
cwtd_App$renderApp$lambda$_2_10, 0, jl_Object, [cwtc_ReactView$ViewFactory], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_10__init_), "$create", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_10_create)],
jur_AbstractCharClass$2, "AbstractCharClass$2", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_3", $rt_wrapFunction3(jur_AbstractCharClass$2__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)],
jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_LeafSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$_init_8", $rt_wrapFunction1(jur_LeafSet__init_0), "$_init_", $rt_wrapFunction0(jur_LeafSet__init_), "$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_CISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_57", $rt_wrapFunction1(jur_CISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts)],
jur_QuantifierSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_QuantifierSet__init_), "$getInnerSet", $rt_wrapFunction0(jur_QuantifierSet_getInnerSet), "$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_LeafQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_LeafQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches)],
jur_CompositeQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$_init_11", $rt_wrapFunction4(jur_CompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches)],
jur_PossessiveCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$_init_11", $rt_wrapFunction4(jur_PossessiveCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)]]);
$rt_metadata([jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_0)],
ju_MissingResourceException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_17", $rt_wrapFunction3(ju_MissingResourceException__init_)],
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_67", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_CharClass$18, "CharClass$18", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_73", $rt_wrapFunction2(jur_CharClass$18__init_), "$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
jur_GroupQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_GroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches)],
jur_PossessiveGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_UCIBackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_UCIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_70", $rt_wrapFunction2(jur_CharClass$13__init_), "$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_70", $rt_wrapFunction2(jur_CharClass$12__init_), "$contains", $rt_wrapFunction1(jur_CharClass$12_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$11__init_), "$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_18", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategory__init_0), "$_init_19", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategory__init_1), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$10__init_), "$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$17__init_), "$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_UCISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_57", $rt_wrapFunction1(jur_UCISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$16__init_), "$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
jur_DotAllQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_DotAllQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotAllQuantifierSet_find)],
jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_72", $rt_wrapFunction3(jur_CharClass$15__init_), "$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_52", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_72", $rt_wrapFunction3(jur_CharClass$14__init_), "$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_118_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_String$_clinit_$lambda$_118_0__init_)],
jur_FSet, 0, jur_AbstractSet, [], 0, 0, 0, jur_FSet_$callClinit, ["$_init_1", $rt_wrapFunction1(jur_FSet__init_), "$matches", $rt_wrapFunction3(jur_FSet_matches), "$getGroupIndex", $rt_wrapFunction0(jur_FSet_getGroupIndex), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_BehindFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_BehindFSet__init_), "$matches", $rt_wrapFunction3(jur_BehindFSet_matches)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_AbstractStringBuilder__init_0), "$_init_1", $rt_wrapFunction1(jl_AbstractStringBuilder__init_), "$_init_0", $rt_wrapFunction1(jl_AbstractStringBuilder__init_2), "$_init_13", $rt_wrapFunction1(jl_AbstractStringBuilder__init_1), "$append5", $rt_wrapFunction1(jl_AbstractStringBuilder_append4), "$append6", $rt_wrapFunction1(jl_AbstractStringBuilder_append2), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1),
"$append7", $rt_wrapFunction1(jl_AbstractStringBuilder_append3), "$append1", $rt_wrapFunction2(jl_AbstractStringBuilder_append5), "$insert1", $rt_wrapFunction3(jl_AbstractStringBuilder_insert3), "$append8", $rt_wrapFunction1(jl_AbstractStringBuilder_append1), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString),
"$length", $rt_wrapFunction0(jl_AbstractStringBuilder_length), "$charAt", $rt_wrapFunction1(jl_AbstractStringBuilder_charAt), "$append4", $rt_wrapFunction3(jl_AbstractStringBuilder_append0), "$insert3", $rt_wrapFunction4(jl_AbstractStringBuilder_insert), "$append9", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$deleteCharAt0", $rt_wrapFunction1(jl_AbstractStringBuilder_deleteCharAt), "$delete", $rt_wrapFunction2(jl_AbstractStringBuilder_delete), "$reverse", $rt_wrapFunction0(jl_AbstractStringBuilder_reverse)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction1(jl_StringBuilder__init_3), "$_init_", $rt_wrapFunction0(jl_StringBuilder__init_2), "$_init_0", $rt_wrapFunction1(jl_StringBuilder__init_1), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append12", $rt_wrapFunction1(jl_StringBuilder_append2), "$append2", $rt_wrapFunction1(jl_StringBuilder_append0), "$append0", $rt_wrapFunction1(jl_StringBuilder_append1), "$append10", $rt_wrapFunction3(jl_StringBuilder_append3),
"$append3", $rt_wrapFunction1(jl_StringBuilder_append5), "$insert4", $rt_wrapFunction4(jl_StringBuilder_insert2), "$insert5", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert6", $rt_wrapFunction2(jl_StringBuilder_insert1), "$delete0", $rt_wrapFunction2(jl_StringBuilder_delete), "$deleteCharAt", $rt_wrapFunction1(jl_StringBuilder_deleteCharAt), "$insert7", $rt_wrapFunction2(jl_StringBuilder_insert5), "$reverse0", $rt_wrapFunction0(jl_StringBuilder_reverse), "$insert3", $rt_wrapFunction4(jl_StringBuilder_insert4),
"$append4", $rt_wrapFunction3(jl_StringBuilder_append4), "$length", $rt_wrapFunction0(jl_StringBuilder_length), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert6)],
jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_CompositeRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_65", $rt_wrapFunction2(jur_CompositeRangeSet__init_0), "$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ConcurrentModificationException__init_)],
cwth_RefHandle, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_30", $rt_wrapFunction1(cwth_RefHandle__init_), "$getCurrentInt", $rt_wrapFunction0(cwth_RefHandle_getCurrentInt), "$setCurrentInt", $rt_wrapFunction1(cwth_RefHandle_setCurrentInt)],
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet__init_), "$setNext", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet_setNext), "$matches", $rt_wrapFunction3(jur_LowHighSurrogateRangeSet_matches)],
jur_ReluctantGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jur_FinalSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FinalSet__init_), "$matches", $rt_wrapFunction3(jur_FinalSet_matches)],
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_PosPlusGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)],
jur_EmptySet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_8", $rt_wrapFunction1(jur_EmptySet__init_0), "$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
cwte_EventHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cwtd_App$renderUseMemoDemo$lambda$_17_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_0_handleEvent)],
cwtd_App$renderUseMemoDemo$lambda$_17_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_1_handleEvent)],
cwtc_ReactView, 0, jl_Object, [], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtc_ReactView__init_), "$onMount", $rt_wrapFunction0(cwtc_ReactView_onMount), "$onUnmount", $rt_wrapFunction0(cwtc_ReactView_onUnmount)],
cwtd_App$renderUseMemoDemo$lambda$_17_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderUseMemoDemo$lambda$_17_2_handleEvent)],
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringBuffer__init_), "$append13", $rt_wrapFunction1(jl_StringBuffer_append1), "$append11", $rt_wrapFunction3(jl_StringBuffer_append2), "$append14", $rt_wrapFunction1(jl_StringBuffer_append0), "$insert8", $rt_wrapFunction4(jl_StringBuffer_insert), "$insert9", $rt_wrapFunction2(jl_StringBuffer_insert2), "$insert3", $rt_wrapFunction4(jl_StringBuffer_insert1), "$append4", $rt_wrapFunction3(jl_StringBuffer_append),
"$charAt", $rt_wrapFunction1(jl_StringBuffer_charAt), "$length", $rt_wrapFunction0(jl_StringBuffer_length), "$toString", $rt_wrapFunction0(jl_StringBuffer_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert2", $rt_wrapFunction2(jl_StringBuffer_insert0)],
cwtd_App$renderTimerFunctional$lambda$_4_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderTimerFunctional$lambda$_4_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderTimerFunctional$lambda$_4_1_handleEvent)],
cwtd_App$renderTimerFunctional$lambda$_4_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(cwtd_App$renderTimerFunctional$lambda$_4_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderTimerFunctional$lambda$_4_2_handleEvent)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_51", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 4, 0, 0, jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$PredefinedCharacterClasses__init_), "$getObject", $rt_wrapFunction1(jur_AbstractCharClass$PredefinedCharacterClasses_getObject)],
cwth_EffectCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0]);
$rt_metadata([cwtd_App$renderTimerFunctional$lambda$_4_0, 0, jl_Object, [cwth_EffectCallback], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(cwtd_App$renderTimerFunctional$lambda$_4_0__init_), "$run", $rt_wrapFunction0(cwtd_App$renderTimerFunctional$lambda$_4_0_run)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
jur_DecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_21", $rt_wrapFunction2(jur_DecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$codePointAt", $rt_wrapFunction3(jur_DecomposedCharSet_codePointAt), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_CIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0, ["$_init_21", $rt_wrapFunction2(jur_CIDecomposedCharSet__init_)],
jur_AheadFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AheadFSet__init_), "$matches", $rt_wrapFunction3(jur_AheadFSet_matches)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
cwtd_App$renderCounterBuilder$lambda$_12_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_0_handleEvent)],
cwth_StateHandle$IntUpdater, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0_update)],
jur_NonCapJointSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_NonCapJointSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, 0, jur_NonCapJointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_AtomicJointSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext)],
jur_PositiveLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_PositiveLookAhead__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed)],
cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0_update)],
cwtd_App$renderCounterBuilder$lambda$_12_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_2_handleEvent)],
jur_NegativeLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_NegativeLookAhead__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed)],
cwtd_App$renderCounterBuilder$lambda$_12_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterBuilder$lambda$_12_1_handleEvent)],
cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0_update)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, ["$_init_46", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next)],
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jur_Quantifier, "Quantifier", 2, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_Quantifier__init_), "$min", $rt_wrapFunction0(jur_Quantifier_min), "$max", $rt_wrapFunction0(jur_Quantifier_max), "$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_44", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwth_Html, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwtd_App$renderFormBuilder$lambda$_14_3, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_3__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_3_handleEvent)],
cwtd_App$renderFormBuilder$lambda$_14_4, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_4__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_4_handleEvent)],
cwth_StateHandle, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_74", $rt_wrapFunction1(cwth_StateHandle__init_0), "$getString0", $rt_wrapFunction0(cwth_StateHandle_getString), "$getInt", $rt_wrapFunction0(cwth_StateHandle_getInt), "$getBool", $rt_wrapFunction0(cwth_StateHandle_getBool), "$setInt", $rt_wrapFunction1(cwth_StateHandle_setInt), "$setString", $rt_wrapFunction1(cwth_StateHandle_setString), "$setBool", $rt_wrapFunction1(cwth_StateHandle_setBool), "$updateInt", $rt_wrapFunction1(cwth_StateHandle_updateInt)],
cwth_DomBuilder, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction1(cwth_DomBuilder__init_), "$text", $rt_wrapFunction1(cwth_DomBuilder_text), "$child", $rt_wrapFunction1(cwth_DomBuilder_child0), "$child0", $rt_wrapFunction1(cwth_DomBuilder_child), "$className0", $rt_wrapFunction1(cwth_DomBuilder_className), "$id", $rt_wrapFunction1(cwth_DomBuilder_id), "$key", $rt_wrapFunction1(cwth_DomBuilder_key), "$style", $rt_wrapFunction1(cwth_DomBuilder_style), "$onClick0", $rt_wrapFunction1(cwth_DomBuilder_onClick),
"$onChange0", $rt_wrapFunction1(cwth_DomBuilder_onChange), "$value0", $rt_wrapFunction1(cwth_DomBuilder_value), "$placeholder0", $rt_wrapFunction1(cwth_DomBuilder_placeholder), "$disabled0", $rt_wrapFunction1(cwth_DomBuilder_disabled), "$type0", $rt_wrapFunction1(cwth_DomBuilder_type), "$prop", $rt_wrapFunction2(cwth_DomBuilder_prop), "$build", $rt_wrapFunction0(cwth_DomBuilder_build)],
cwth_DomBuilder$Button, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
cwth_DomBuilder$Li, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractCollection__init_), "$isEmpty", $rt_wrapFunction0(ju_AbstractCollection_isEmpty), "$toArray", $rt_wrapFunction1(ju_AbstractCollection_toArray)],
cwtd_App$renderFormBuilder$lambda$_14_1, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_1__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_1_handleEvent)],
jur_PossessiveQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_PossessiveQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwtd_App$renderFormBuilder$lambda$_14_2, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_2__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_2_handleEvent)],
cwtd_App$renderFormBuilder$lambda$_14_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderFormBuilder$lambda$_14_0_handleEvent)],
jur_AltQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_AltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_PossessiveAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_66", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_20", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_ReluctantQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_ReluctantQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
cwtd_App$renderCounterFunctional$lambda$_3_5, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_5__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_5_handleEvent)],
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwtc_React, 0, jl_Object, [], 4, 3, 0, 0, 0]);
$rt_metadata([jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_68", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
cwtd_App$renderCounterFunctional$lambda$_3_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(cwtd_App$renderCounterFunctional$lambda$_3_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_0_handleEvent)],
cwtd_App$renderCounterFunctional$lambda$_3_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_2_handleEvent)],
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwtd_App$renderCounterFunctional$lambda$_3_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_37", $rt_wrapFunction2(cwtd_App$renderCounterFunctional$lambda$_3_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_1_handleEvent)],
cwtd_App$renderCounterFunctional$lambda$_3_4, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_4__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_4_handleEvent)],
cwtd_App$renderCounterFunctional$lambda$_3_3, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_3__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderCounterFunctional$lambda$_3_3_handleEvent)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)],
jur_PositiveLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_PositiveLookBehind__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed)],
jur_SequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_57", $rt_wrapFunction1(jur_SequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$first", $rt_wrapFunction1(jur_SequenceSet_first), "$indexOf", $rt_wrapFunction3(jur_SequenceSet_indexOf), "$lastIndexOf", $rt_wrapFunction3(jur_SequenceSet_lastIndexOf), "$startsWith", $rt_wrapFunction2(jur_SequenceSet_startsWith)],
cwtd_App$StopwatchView, 0, cwtc_ReactView, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$StopwatchView__init_), "$onMount", $rt_wrapFunction0(cwtd_App$StopwatchView_onMount), "$onUnmount", $rt_wrapFunction0(cwtd_App$StopwatchView_onUnmount), "$render0", $rt_wrapFunction0(cwtd_App$StopwatchView_render)],
cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0_update)],
jur_EOISet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_EOISet__init_), "$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed)],
cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0_update)],
jl_ArrayStoreException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_ArrayStoreException__init_0)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
jur_AltGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_AltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
jur_MatchResult, 0, jl_Object, [], 3, 3, 0, 0, 0,
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, 0, ["$_init_42", function(var_1, var_2, var_3, var_4, var_5, var_6) { jur_MatchResultImpl__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }, "$setConsumed", $rt_wrapFunction2(jur_MatchResultImpl_setConsumed), "$getConsumed", $rt_wrapFunction1(jur_MatchResultImpl_getConsumed), "$end0", $rt_wrapFunction0(jur_MatchResultImpl_end), "$end", $rt_wrapFunction1(jur_MatchResultImpl_end0), "$setStart", $rt_wrapFunction2(jur_MatchResultImpl_setStart),
"$setEnd", $rt_wrapFunction2(jur_MatchResultImpl_setEnd), "$getStart", $rt_wrapFunction1(jur_MatchResultImpl_getStart), "$getEnd", $rt_wrapFunction1(jur_MatchResultImpl_getEnd), "$getGroupNoCheck", $rt_wrapFunction1(jur_MatchResultImpl_getGroupNoCheck), "$start0", $rt_wrapFunction0(jur_MatchResultImpl_start), "$start", $rt_wrapFunction1(jur_MatchResultImpl_start0), "$finalizeMatch", $rt_wrapFunction0(jur_MatchResultImpl_finalizeMatch), "$getEnterCounter", $rt_wrapFunction1(jur_MatchResultImpl_getEnterCounter),
"$setEnterCounter", $rt_wrapFunction2(jur_MatchResultImpl_setEnterCounter), "$setValid", $rt_wrapFunction0(jur_MatchResultImpl_setValid), "$isValid", $rt_wrapFunction0(jur_MatchResultImpl_isValid), "$reset", $rt_wrapFunction3(jur_MatchResultImpl_reset0), "$reset0", $rt_wrapFunction0(jur_MatchResultImpl_reset), "$setStartIndex", $rt_wrapFunction1(jur_MatchResultImpl_setStartIndex), "$getLeftBound", $rt_wrapFunction0(jur_MatchResultImpl_getLeftBound), "$getRightBound", $rt_wrapFunction0(jur_MatchResultImpl_getRightBound),
"$setMode", $rt_wrapFunction1(jur_MatchResultImpl_setMode), "$mode", $rt_wrapFunction0(jur_MatchResultImpl_mode), "$useAnchoringBounds", $rt_wrapFunction1(jur_MatchResultImpl_useAnchoringBounds), "$hasAnchoringBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasAnchoringBounds), "$hasTransparentBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasTransparentBounds), "$getPreviousMatchEnd", $rt_wrapFunction0(jur_MatchResultImpl_getPreviousMatchEnd)],
jur_UCIRangeSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(jur_UCIRangeSet__init_), "$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts)],
cwtc_VoidCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cwtd_App$CounterView$lambda$render$3$lambda$_3_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$CounterView$lambda$render$3$lambda$_3_0__init_), "$update", $rt_wrapFunction1(cwtd_App$CounterView$lambda$render$3$lambda$_3_0_update)],
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_31", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_MultiLineSOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_63", $rt_wrapFunction1(jur_MultiLineSOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed)],
jur_NegativeLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$_init_22", $rt_wrapFunction2(jur_NegativeLookBehind__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed)],
cwtd_App$renderApp$lambda$_2_15, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_15__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_15_render)],
jur_BackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_BackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
jur_DotQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$_init_61", $rt_wrapFunction4(jur_DotQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotQuantifierSet_find)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1, 0, jl_Object, [cwtc_VoidCallback], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction1(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1__init_), "$call", $rt_wrapFunction0(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1_call)],
cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0, 0, jl_Object, [cwtc_VoidCallback], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0__init_), "$call", $rt_wrapFunction0(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0_call)],
jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
cwtd_App$CounterView, 0, cwtc_ReactView, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$CounterView__init_), "$render0", $rt_wrapFunction0(cwtd_App$CounterView_render)],
jur_PreviousMatch, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_PreviousMatch__init_), "$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed)],
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
jur_UnifiedQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$_init_60", $rt_wrapFunction1(jur_UnifiedQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$getPlatformClass", $rt_wrapFunction0(jl_Class_getPlatformClass), "$isInstance0", $rt_wrapFunction1(jl_Class_isInstance), "$getName", $rt_wrapFunction0(jl_Class_getName), "$isPrimitive0", $rt_wrapFunction0(jl_Class_isPrimitive), "$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType)],
ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_BitSet__init_0), "$_init_1", $rt_wrapFunction1(ju_BitSet__init_), "$set1", $rt_wrapFunction1(ju_BitSet_set), "$set", $rt_wrapFunction2(ju_BitSet_set0), "$clear", $rt_wrapFunction1(ju_BitSet_clear0), "$clear0", $rt_wrapFunction2(ju_BitSet_clear), "$get0", $rt_wrapFunction1(ju_BitSet_get), "$nextSetBit", $rt_wrapFunction1(ju_BitSet_nextSetBit), "$nextClearBit", $rt_wrapFunction1(ju_BitSet_nextClearBit), "$intersects",
$rt_wrapFunction1(ju_BitSet_intersects), "$and", $rt_wrapFunction1(ju_BitSet_and), "$andNot", $rt_wrapFunction1(ju_BitSet_andNot), "$or", $rt_wrapFunction1(ju_BitSet_or), "$xor", $rt_wrapFunction1(ju_BitSet_xor), "$isEmpty", $rt_wrapFunction0(ju_BitSet_isEmpty)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_4", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0_update)]]);
$rt_metadata([jur_NonCapFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_NonCapFSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
cwtd_App$CharCounterView, 0, cwtc_ReactView, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$CharCounterView__init_), "$render0", $rt_wrapFunction0(cwtd_App$CharCounterView_render)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jur_CharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_CharSet__init_0), "$charCount", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$getChar", $rt_wrapFunction0(jur_CharSet_getChar), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_UCISupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_UCISupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts)],
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_71", $rt_wrapFunction3(jur_CharClass$3__init_), "$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$4__init_), "$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
cwtd_App, 0, jl_Object, [], 0, 3, 0, cwtd_App_$callClinit, 0,
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_70", $rt_wrapFunction2(jur_CharClass$1__init_), "$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_71", $rt_wrapFunction3(jur_CharClass$2__init_), "$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_AbstractCharClass$LazyRange__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_70", $rt_wrapFunction2(jur_CharClass$7__init_), "$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_72", $rt_wrapFunction3(jur_CharClass$8__init_), "$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_69", $rt_wrapFunction4(jur_CharClass$5__init_), "$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_70", $rt_wrapFunction2(jur_CharClass$6__init_), "$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
cwtd_App$renderApp$lambda$_2_9, 0, jl_Object, [cwtc_ReactView$ViewFactory], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_9__init_), "$create", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_9_create)],
cwtd_App$renderApp$lambda$_2_8, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_8__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_8_render)],
jur_DotSet, 0, jur_JointSet, [], 4, 0, 0, 0, ["$_init_63", $rt_wrapFunction1(jur_DotSet__init_), "$matches", $rt_wrapFunction3(jur_DotSet_matches), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_72", $rt_wrapFunction3(jur_CharClass$9__init_), "$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
jur_Matcher, 0, jl_Object, [jur_MatchResult], 4, 3, 0, 0, ["$find0", $rt_wrapFunction1(jur_Matcher_find), "$find1", $rt_wrapFunction0(jur_Matcher_find0), "$start", $rt_wrapFunction1(jur_Matcher_start0), "$end", $rt_wrapFunction1(jur_Matcher_end), "$start0", $rt_wrapFunction0(jur_Matcher_start), "$end0", $rt_wrapFunction0(jur_Matcher_end0), "$hasTransparentBounds", $rt_wrapFunction0(jur_Matcher_hasTransparentBounds), "$_init_53", $rt_wrapFunction2(jur_Matcher__init_)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
cwtd_App$renderApp$lambda$_2_5, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_5__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_5_render)],
cwtc_ReactView$toComponent$lambda$_6_0, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_15", $rt_wrapFunction1(cwtc_ReactView$toComponent$lambda$_6_0__init_), "$render", $rt_wrapFunction1(cwtc_ReactView$toComponent$lambda$_6_0_render)],
jur_DotAllSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_DotAllSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
cwtd_App$renderApp$lambda$_2_4, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_4__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_4_render)],
jur_CICharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_CICharSet__init_0), "$accepts", $rt_wrapFunction2(jur_CICharSet_accepts)],
jur_SupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_SupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$getCodePoint", $rt_wrapFunction0(jur_SupplCharSet_getCodePoint), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
cwtd_App$renderApp$lambda$_2_7, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_7__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_7_render)],
cwtd_App$renderApp$lambda$_2_6, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_6__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_6_render)],
cwtd_App$renderApp$lambda$_2_1, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_1__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_1_render)],
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0, 0, jl_Object, [cwtc_VoidCallback], 0, 3, 0, 0, ["$_init_29", $rt_wrapFunction1(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0__init_), "$call", $rt_wrapFunction0(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0_call)],
cwtd_App$renderApp$lambda$_2_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_36", $rt_wrapFunction2(cwtd_App$renderApp$lambda$_2_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_0_handleEvent)],
cwtd_App$renderApp$lambda$_2_3, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_3__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_3_render)],
cwtd_App$renderApp$lambda$_2_2, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$renderApp$lambda$_2_2__init_), "$render", $rt_wrapFunction1(cwtd_App$renderApp$lambda$_2_2_render)],
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_18", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategoryScope__init_1), "$_init_19", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategoryScope__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1, 0, jl_Object, [cwtc_VoidCallback], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction1(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1__init_), "$call", $rt_wrapFunction0(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1_call)],
jur_SupplRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(jur_SupplRangeSet__init_), "$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$getChars", $rt_wrapFunction0(jur_SupplRangeSet_getChars), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_UCISupplRangeSet, 0, jur_SupplRangeSet, [], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(jur_UCISupplRangeSet__init_0), "$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_AbstractLineTerminator, 0, jl_Object, [], 1, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator__init_)],
jur_HangulDecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_58", $rt_wrapFunction2(jur_HangulDecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
cwtc_ReactDOM, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwth_DomBuilder$P, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
cwth_Style, 0, jl_Object, [], 0, 3, 0, 0, ["$set0", $rt_wrapFunction2(cwth_Style_set), "$background", $rt_wrapFunction1(cwth_Style_background), "$color", $rt_wrapFunction1(cwth_Style_color), "$padding", $rt_wrapFunction1(cwth_Style_padding), "$borderRadius", $rt_wrapFunction1(cwth_Style_borderRadius), "$toJSObject", $rt_wrapFunction0(cwth_Style_toJSObject)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_32", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
cwtd_App$renderPageNavigationBuilder$lambda$_10_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_2_handleEvent)]]);
$rt_metadata([cwth_ElementBuilder, 0, jl_Object, [], 4, 3, 0, 0, ["$_init_23", $rt_wrapFunction2(cwth_ElementBuilder__init_0), "$className", $rt_wrapFunction1(cwth_ElementBuilder_className), "$onClick", $rt_wrapFunction1(cwth_ElementBuilder_onClick), "$onChange", $rt_wrapFunction1(cwth_ElementBuilder_onChange), "$onKeyDown", $rt_wrapFunction1(cwth_ElementBuilder_onKeyDown), "$onFocus", $rt_wrapFunction1(cwth_ElementBuilder_onFocus), "$onBlur", $rt_wrapFunction1(cwth_ElementBuilder_onBlur), "$value", $rt_wrapFunction1(cwth_ElementBuilder_value),
"$placeholder", $rt_wrapFunction1(cwth_ElementBuilder_placeholder), "$disabled", $rt_wrapFunction1(cwth_ElementBuilder_disabled), "$checked", $rt_wrapFunction1(cwth_ElementBuilder_checked), "$type", $rt_wrapFunction1(cwth_ElementBuilder_type), "$rows", $rt_wrapFunction1(cwth_ElementBuilder_rows), "$cols", $rt_wrapFunction1(cwth_ElementBuilder_cols), "$maxLength", $rt_wrapFunction1(cwth_ElementBuilder_maxLength), "$build", $rt_wrapFunction0(cwth_ElementBuilder_build)],
cwtd_App$renderPageNavigationBuilder$lambda$_10_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_0_handleEvent)],
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, 0,
cwtd_App$renderPageNavigationBuilder$lambda$_10_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderPageNavigationBuilder$lambda$_10_1_handleEvent)],
cwtc_ReactView$lambda$toComponent$1$lambda$_7_0, 0, jl_Object, [cwth_EffectCallback], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(cwtc_ReactView$lambda$toComponent$1$lambda$_7_0__init_), "$run", $rt_wrapFunction0(cwtc_ReactView$lambda$toComponent$1$lambda$_7_0_run)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_49", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_50", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)],
jur_WordBoundary, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_62", $rt_wrapFunction1(jur_WordBoundary__init_0), "$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed)],
jur_UEOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_UEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed)],
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
cwtc_JsUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_UCICharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_UCICharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts)],
cwtd_App$CounterView$render$lambda$_1_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_2_handleEvent)],
cwtd_App$CounterView$render$lambda$_1_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_1_handleEvent)],
jur_AtomicFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_AtomicFSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$getIndex", $rt_wrapFunction0(jur_AtomicFSet_getIndex), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)],
cwtd_App$CounterView$render$lambda$_1_0, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_33", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_0__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$CounterView$render$lambda$_1_0_handleEvent)],
jur_LowSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_LowSurrogateCharSet__init_0), "$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_CompositeGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_CompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches)],
jur_RelCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_RelCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractList__init_), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ArrayList__init_1), "$_init_1", $rt_wrapFunction1(ju_ArrayList__init_), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$add2", $rt_wrapFunction1(ju_ArrayList_add), "$add1", $rt_wrapFunction2(ju_ArrayList_add0), "$remove", $rt_wrapFunction1(ju_ArrayList_remove)],
cwte_FocusEventHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cwtd_App$renderTextInputFunctional$lambda$_5_2, 0, jl_Object, [cwte_FocusEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_2__init_), "$handleEvent1", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_2_handleEvent)],
jur_RelAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
cwtd_App$renderTextInputFunctional$lambda$_5_1, 0, jl_Object, [cwte_FocusEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_1__init_), "$handleEvent1", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_1_handleEvent)],
cwtd_App$renderTextInputFunctional$lambda$_5_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderTextInputFunctional$lambda$_5_0_handleEvent)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, ["$_init_", $rt_wrapFunction0(jl_String__init_3), "$_init_25", $rt_wrapFunction1(jl_String__init_0), "$_init_47", $rt_wrapFunction1(jl_String__init_4), "$_init_14", $rt_wrapFunction3(jl_String__init_5), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$startsWith0", $rt_wrapFunction2(jl_String_startsWith),
"$startsWith1", $rt_wrapFunction1(jl_String_startsWith0), "$indexOf1", $rt_wrapFunction2(jl_String_indexOf), "$lastIndexOf1", $rt_wrapFunction2(jl_String_lastIndexOf), "$indexOf0", $rt_wrapFunction2(jl_String_indexOf0), "$lastIndexOf0", $rt_wrapFunction2(jl_String_lastIndexOf0), "$substring", $rt_wrapFunction2(jl_String_substring), "$substring0", $rt_wrapFunction1(jl_String_substring0), "$subSequence", $rt_wrapFunction2(jl_String_subSequence), "$contains0", $rt_wrapFunction1(jl_String_contains), "$trim", $rt_wrapFunction0(jl_String_trim),
"$toString", $rt_wrapFunction0(jl_String_toString), "$toCharArray", $rt_wrapFunction0(jl_String_toCharArray), "$equals", $rt_wrapFunction1(jl_String_equals), "$toLowerCase1", $rt_wrapFunction0(jl_String_toLowerCase), "$toUpperCase0", $rt_wrapFunction0(jl_String_toUpperCase), "$split", $rt_wrapFunction1(jl_String_split)],
cwth_DomBuilder$Input, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
cwth_DomBuilder$Div, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_ReluctantAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$_init_10", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)],
cwtc_ReactContext, 0, jl_Object, [], 0, 3, 0, 0, ["$useString", $rt_wrapFunction0(cwtc_ReactContext_useString), "$provide", $rt_wrapFunction2(cwtc_ReactContext_provide)],
cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0__init_), "$update", $rt_wrapFunction1(cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0_update)],
jur_FSet$PossessiveFSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FSet$PossessiveFSet__init_), "$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
cwtd_App$addTodo$lambda$_7_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$addTodo$lambda$_7_0__init_), "$update", $rt_wrapFunction1(cwtd_App$addTodo$lambda$_7_0_update)],
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalArgumentException__init_0), "$_init_0", $rt_wrapFunction1(jl_IllegalArgumentException__init_1)],
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NumberFormatException__init_1), "$_init_0", $rt_wrapFunction1(jl_NumberFormatException__init_)],
jur_PosCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_PosCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
cwtc_ReactView$lambda$toComponent$0$lambda$_8_0, 0, jl_Object, [cwtc_VoidCallback], 0, 3, 0, 0, ["$_init_16", $rt_wrapFunction1(cwtc_ReactView$lambda$toComponent$0$lambda$_8_0__init_), "$call", $rt_wrapFunction0(cwtc_ReactView$lambda$toComponent$0$lambda$_8_0_call)],
jur_MultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_MultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed)],
cwtd_App$StopwatchView$render$lambda$_3_1, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_29", $rt_wrapFunction1(cwtd_App$StopwatchView$render$lambda$_3_1__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$StopwatchView$render$lambda$_3_1_handleEvent)],
cwtd_App$StopwatchView$render$lambda$_3_0, 0, jl_Object, [cwth_EffectCallback], 0, 3, 0, 0, ["$_init_29", $rt_wrapFunction1(cwtd_App$StopwatchView$render$lambda$_3_0__init_), "$run", $rt_wrapFunction0(cwtd_App$StopwatchView$render$lambda$_3_0_run)],
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
cwtd_App$StopwatchView$render$lambda$_3_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_29", $rt_wrapFunction1(cwtd_App$StopwatchView$render$lambda$_3_2__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$StopwatchView$render$lambda$_3_2_handleEvent)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_24", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jl_IllegalStateException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalStateException__init_)],
jur_HighSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_HighSurrogateCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
jur_ReluctantCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$_init_11", $rt_wrapFunction4(jur_ReluctantCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0_update)],
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_0", $rt_wrapFunction1(jl_NullPointerException__init_1), "$_init_", $rt_wrapFunction0(jl_NullPointerException__init_0)],
jur_SOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SOLSet__init_), "$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed)],
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_28", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper$Helper$FinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 0, 0, 0, 0,
cwth_DomBuilder$Dt, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jur_PatternSyntaxException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, ["$_init_55", $rt_wrapFunction3(jur_PatternSyntaxException__init_0)],
cwth_DomBuilder$Ul, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)],
cwth_DomBuilder$Nav, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
cwth_DomBuilder$Dd, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
cwth_DomBuilder$Textarea, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
cwtd_App$CounterView$lambda$render$1$lambda$_5_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$CounterView$lambda$render$1$lambda$_5_0__init_), "$update", $rt_wrapFunction1(cwtd_App$CounterView$lambda$render$1$lambda$_5_0_update)],
cwtd_App$main$lambda$_1_0, 0, jl_Object, [cwtc_RenderFunction], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cwtd_App$main$lambda$_1_0__init_), "$render", $rt_wrapFunction1(cwtd_App$main$lambda$_1_0_render)],
cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0, 0, jl_Object, [cwth_StateHandle$IntUpdater], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0__init_), "$update", $rt_wrapFunction1(cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0_update)],
cwth_DomBuilder$Dl, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_Pattern, 0, jl_Object, [ji_Serializable], 4, 3, 0, 0, ["$matcher", $rt_wrapFunction1(jur_Pattern_matcher), "$split1", $rt_wrapFunction2(jur_Pattern_split0), "$split0", $rt_wrapFunction1(jur_Pattern_split), "$pattern", $rt_wrapFunction0(jur_Pattern_pattern), "$groupCount", $rt_wrapFunction0(jur_Pattern_groupCount), "$compCount", $rt_wrapFunction0(jur_Pattern_compCount), "$consCount", $rt_wrapFunction0(jur_Pattern_consCount)],
jur_PosAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
cwte_KeyboardEventHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
cwth_DomBuilder$Label, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
jur_UMultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_UMultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed)],
cwtd_App$renderUseRefDemo$lambda$_15_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderUseRefDemo$lambda$_15_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderUseRefDemo$lambda$_15_0_handleEvent)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
otciu_UnicodeHelper$Range, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_27", $rt_wrapFunction3(otciu_UnicodeHelper$Range__init_)],
jur_EOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_EOLSet__init_), "$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$2__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
otciu_CharMapping, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_26", $rt_wrapFunction2(otciu_CharMapping__init_)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$1__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
jur_Lexer, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_54", $rt_wrapFunction2(jur_Lexer__init_), "$peek", $rt_wrapFunction0(jur_Lexer_peek), "$setMode", $rt_wrapFunction1(jur_Lexer_setMode), "$restoreFlags", $rt_wrapFunction1(jur_Lexer_restoreFlags), "$peekSpecial", $rt_wrapFunction0(jur_Lexer_peekSpecial), "$isSpecial", $rt_wrapFunction0(jur_Lexer_isSpecial), "$isNextSpecial", $rt_wrapFunction0(jur_Lexer_isNextSpecial), "$next0", $rt_wrapFunction0(jur_Lexer_next), "$nextSpecial", $rt_wrapFunction0(jur_Lexer_nextSpecial),
"$lookAhead", $rt_wrapFunction0(jur_Lexer_lookAhead), "$back", $rt_wrapFunction0(jur_Lexer_back), "$toString", $rt_wrapFunction0(jur_Lexer_toString), "$isEmpty", $rt_wrapFunction0(jur_Lexer_isEmpty), "$isLetter0", $rt_wrapFunction0(jur_Lexer_isLetter0), "$isHighSurrogate0", $rt_wrapFunction0(jur_Lexer_isHighSurrogate0), "$isLowSurrogate0", $rt_wrapFunction0(jur_Lexer_isLowSurrogate0), "$getIndex", $rt_wrapFunction0(jur_Lexer_getIndex)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_25", $rt_wrapFunction1(otci_CharFlow__init_)],
cwtd_App$renderItemListBuilder$lambda$_13_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderItemListBuilder$lambda$_13_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderItemListBuilder$lambda$_13_0_handleEvent)],
jur_RangeSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$_init_43", $rt_wrapFunction1(jur_RangeSet__init_), "$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$first", $rt_wrapFunction1(jur_RangeSet_first), "$getChars", $rt_wrapFunction0(jur_RangeSet_getChars)],
jur_UnicodeCategory, "UnicodeCategory", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_UnicodeCategory__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 2, jur_UnicodeCategory, [], 0, 0, 0, 0, ["$_init_1", $rt_wrapFunction1(jur_UnicodeCategoryScope__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
cwtd_App$renderTodoListFunctional$lambda$_6_2, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_41", function(var_1, var_2, var_3, var_4, var_5) { cwtd_App$renderTodoListFunctional$lambda$_6_2__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_2_handleEvent)],
cwtd_App$renderTodoListFunctional$lambda$_6_3, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_39", $rt_wrapFunction2(cwtd_App$renderTodoListFunctional$lambda$_6_3__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_3_handleEvent)],
cwtd_App$renderTodoListFunctional$lambda$_6_4, 0, jl_Object, [cwte_EventHandler], 0, 3, 0, 0, ["$_init_40", $rt_wrapFunction4(cwtd_App$renderTodoListFunctional$lambda$_6_4__init_), "$handleEvent0", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_4_handleEvent)],
jur_CharClass, "CharClass", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_CharClass__init_2), "$_init_56", $rt_wrapFunction2(jur_CharClass__init_0), "$_init_64", $rt_wrapFunction3(jur_CharClass__init_1), "$add", $rt_wrapFunction1(jur_CharClass_add), "$add3", $rt_wrapFunction1(jur_CharClass_add1), "$add0", $rt_wrapFunction2(jur_CharClass_add0), "$union", $rt_wrapFunction1(jur_CharClass_union), "$intersection", $rt_wrapFunction1(jur_CharClass_intersection), "$contains", $rt_wrapFunction1(jur_CharClass_contains),
"$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
cwtd_App$renderTodoListFunctional$lambda$_6_0, 0, jl_Object, [cwte_ChangeEventHandler], 0, 3, 0, 0, ["$_init_38", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_0__init_), "$handleEvent", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_0_handleEvent)]]);
$rt_metadata([cwtd_App$renderTodoListFunctional$lambda$_6_1, 0, jl_Object, [cwte_KeyboardEventHandler], 0, 3, 0, 0, ["$_init_41", function(var_1, var_2, var_3, var_4, var_5) { cwtd_App$renderTodoListFunctional$lambda$_6_1__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$handleEvent2", $rt_wrapFunction1(cwtd_App$renderTodoListFunctional$lambda$_6_1_handleEvent)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept)],
jur_UCIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0, ["$_init_21", $rt_wrapFunction2(jur_UCIDecomposedCharSet__init_)],
cwth_DomBuilder$H3, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0,
cwth_Hooks, 0, jl_Object, [], 4, 3, 0, 0, 0,
cwth_DomBuilder$H4, 0, cwth_DomBuilder, [], 4, 3, 0, 0, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_intArrayCls = $rt_arraycls($rt_intcls);
$rt_stringPool(["String is null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for int type: ", "The value is too big for integer type", "Illegal radix: ", "null", "", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank", "Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl", "javaJavaIdentifierPart",
"javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit", "javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart", "Space", "w", "W", "s", "S", "d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks", "Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi", "Gujarati", "Oriya", "Tamil",
"Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao", "Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee", "UnifiedCanadianAboriginalSyllabics", "Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese", "PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation", "SuperscriptsandSubscripts",
"CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols", "NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures", "OpticalCharacterRecognition", "EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A", "SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators", "MiscellaneousSymbolsandArrows",
"Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended", "SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters", "CJKSymbolsandPunctuation", "Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions", "EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs", "YiSyllables", "YiRadicals", "ModifierToneLetters",
"SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates", "LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms", "ArabicPresentationForms-A", "VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B", "HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N", "Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC",
"Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc", "Sk", "So", "Pi", "Pf", "button", "input", "textarea", "li", "0", "Stopwatch (Class-based)", "Start", "Stop", "btn-success", "btn-warning", "Reset", "object", "function", "string", "number", "undefined", "Counter (Class-based)", "Count: ", "Increment", "Decrement", "\\s+", "Character Counter (Class-based)", "Type a paragraph...", " characters, ", " words", "Your text in UPPERCASE will appear here.", "Either src or dest is null",
"App", "light", "dark", "teavm-react Kitchen Sink", "A comprehensive demo of every library feature.", "Switch to Dark", "Switch to Light", "theme-toggle", "1. Approach A — Functional Components", "React-familiar hooks-based pattern.", "CounterFunctional", "TimerFunctional", "TextInputFunctional", "TodoListFunctional", "2. Approach B — Builder DSL", "Java-idiomatic fluent builder pattern.", "PageNavigationBuilder", "CounterBuilder", "ItemListBuilder", "FormBuilder", "3. Approach C — Class-Based Components", "Swing/JavaFX-familiar extends ReactView.",
"CounterView", "StopwatchView", "CharCounterView", "4. Hooks Showcase", "UseRefDemo", "UseContextDemo", "UseMemoDemo", "5. HTML Elements Showcase", "HtmlElementsDemo", "Built with teavm-react — Java compiled to JS via TeaVM, rendered by React 18.", "Counter with Step", "1", "5", "10", "Timer with useEffect", "Resume", "Pause", "Controlled Text Input", "text", "Type something...", " (focused)", "/100 characters", "Start typing to see your text reversed.", "Reversed: ", "0,1,2", "Learn Java,Try teavm-react,Build something cool",
"false,false,false", ",", "true", "checkbox", " x", "btn-danger btn-sm", "Todo List", " completed", "Add a todo...", "Add", "false", "home", "page-nav-demo", "navbar", "Page Navigation (Builder DSL)", "nav-links", "Home", "nav-btn", "About", "Contact", "content", "about", "About Page", "This is the about page, rendered with DomBuilder.", "contact", "Home Page", "Welcome! Click the buttons above to navigate.", "Contact Page", "This is the contact page.", "Counter (Builder DSL)", "Apple", "Banana", "Cherry", "Date",
"Elderberry", "Fig", "Grape", "Filterable List (Builder DSL)", "Filter fruits...", "Showing ", " of ", "Form (Builder DSL)", "Submitted!", "Name", "Email", "Message", "form-group", "Name:", "htmlFor", "name", "Your name", "Email:", "email", "you@example.com", "Message:", "msg", "Write something...", "rows", "4", "Submit", "useRef — Render Counter", "This component has rendered ", " times.", "Type below to trigger re-renders:", "Type to re-render...", "#f0f0f0", "#333", "#fff", "16px", "8px", "marginBottom",
"12px", "useContext — Theme Consumer", "Current theme: ", "This box adapts to the theme set at the app root.", "Light mode is active. Click the toggle above to switch.", "Dark mode is active. Click the toggle above to switch.", "useMemo Concept — Fibonacci", "Fibonacci(", ") = ", "n-1", "n+1", "Unrelated counter (re-renders without recomputing fib): ", "Increment unrelated", "HTML Elements Gallery", "Headings", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6", "Text Formatting", "emphasized",
"strong", "small", "inline code", "marked", "This is a blockquote. Someone wise said this.", "function hello() {\n  console.log(\'Hello from pre!\');\n}", "Lists", "Unordered:", "First item", "Second item", "Third item", "Ordered:", "Step one", "Step two", "Step three", "Definition List:", "TeaVM", "Compiles Java bytecode to JavaScript", "React", "A JavaScript library for building user interfaces", "teavm-react", "The bridge between the two!", "Table", "Feature", "Approach A", "Approach B", "Approach C", "Style",
"Functional", "Builder", "Class-based", "Familiar to", "React devs", "Java devs", "Swing/JavaFX", "State", "useState()", "Field + useState", "Lifecycle", "useEffect", "onMount/Unmount", "Details & Summary", "Click to expand", "This content was hidden inside a details element.", "It uses the native HTML5 details/summary elements.", "Semantic Elements", "Article Title", "This is an article with header, main content, and footer.", "Published by teavm-react demo", "Fragment", "The next three items are rendered via React.Fragment (no wrapper div):",
"One ", "Two ", "Three", "Enter", "p", "background", "color", "padding", "borderRadius", "div", "dt", "ul", "nav", "dd", "dl", "Patter is null", "\\Q", "\\E", "\\\\E\\Q", "label", "Is", "In", "h3", "h4"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(cwtd_App_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = cwtd_App$renderApp$lambda$_2_12.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_12_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_13.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_13_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_14.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_14_render$exported$0);
    c = cwtd_App$CharCounterView$render$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$CharCounterView$render$lambda$_1_0_handleEvent$exported$0);
    c = cwtd_App$renderUseMemoDemo$lambda$_17_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderUseMemoDemo$lambda$_17_0_handleEvent$exported$0);
    c = cwtd_App$renderUseMemoDemo$lambda$_17_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderUseMemoDemo$lambda$_17_1_handleEvent$exported$0);
    c = cwtd_App$renderUseMemoDemo$lambda$_17_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderUseMemoDemo$lambda$_17_2_handleEvent$exported$0);
    c = cwtd_App$renderTimerFunctional$lambda$_4_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTimerFunctional$lambda$_4_1_handleEvent$exported$0);
    c = cwtd_App$renderTimerFunctional$lambda$_4_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTimerFunctional$lambda$_4_2_handleEvent$exported$0);
    c = cwtd_App$renderTimerFunctional$lambda$_4_0.prototype;
    c.run = $rt_callWithReceiver(cwtd_App$renderTimerFunctional$lambda$_4_0_run$exported$0);
    c = cwtd_App$renderCounterBuilder$lambda$_12_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterBuilder$lambda$_12_0_handleEvent$exported$0);
    c = cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderUseMemoDemo$40$lambda$_24_0_update$exported$0);
    c = cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderTimerFunctional$10$lambda$_54_0_update$exported$0);
    c = cwtd_App$renderCounterBuilder$lambda$_12_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterBuilder$lambda$_12_2_handleEvent$exported$0);
    c = cwtd_App$renderCounterBuilder$lambda$_12_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterBuilder$lambda$_12_1_handleEvent$exported$0);
    c = cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderUseMemoDemo$44$lambda$_20_0_update$exported$0);
    c = cwtd_App$renderFormBuilder$lambda$_14_3.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderFormBuilder$lambda$_14_3_handleEvent$exported$0);
    c = cwtd_App$renderFormBuilder$lambda$_14_4.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderFormBuilder$lambda$_14_4_handleEvent$exported$0);
    c = cwtd_App$renderFormBuilder$lambda$_14_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderFormBuilder$lambda$_14_1_handleEvent$exported$0);
    c = cwtd_App$renderFormBuilder$lambda$_14_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderFormBuilder$lambda$_14_2_handleEvent$exported$0);
    c = cwtd_App$renderFormBuilder$lambda$_14_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderFormBuilder$lambda$_14_0_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_5.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_5_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_0_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_2_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_1_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_4.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_4_handleEvent$exported$0);
    c = cwtd_App$renderCounterFunctional$lambda$_3_3.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderCounterFunctional$lambda$_3_3_handleEvent$exported$0);
    c = cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderCounterFunctional$2$lambda$_62_0_update$exported$0);
    c = cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderCounterBuilder$28$lambda$_36_0_update$exported$0);
    c = cwtd_App$CounterView$lambda$render$3$lambda$_3_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$CounterView$lambda$render$3$lambda$_3_0_update$exported$0);
    c = cwtd_App$renderApp$lambda$_2_15.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_15_render$exported$0);
    c = cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1.prototype;
    c.call = $rt_callWithReceiver(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_1_call$exported$0);
    c = cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0.prototype;
    c.call = $rt_callWithReceiver(cwtd_App$lambda$renderTimerFunctional$12$lambda$_52_0_call$exported$0);
    c = cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderUseMemoDemo$42$lambda$_22_0_update$exported$0);
    c = cwtd_App$renderApp$lambda$_2_8.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_8_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_5.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_5_render$exported$0);
    c = cwtc_ReactView$toComponent$lambda$_6_0.prototype;
    c.render = $rt_callWithReceiver(cwtc_ReactView$toComponent$lambda$_6_0_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_4.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_4_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_7.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_7_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_6.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_6_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_1.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_1_render$exported$0);
    c = cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0.prototype;
    c.call = $rt_callWithReceiver(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_0_call$exported$0);
    c = cwtd_App$renderApp$lambda$_2_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_0_handleEvent$exported$0);
    c = cwtd_App$renderApp$lambda$_2_3.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_3_render$exported$0);
    c = cwtd_App$renderApp$lambda$_2_2.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$renderApp$lambda$_2_2_render$exported$0);
    c = cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1.prototype;
    c.call = $rt_callWithReceiver(cwtd_App$StopwatchView$lambda$render$3$lambda$_6_1_call$exported$0);
    c = cwtd_App$renderPageNavigationBuilder$lambda$_10_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderPageNavigationBuilder$lambda$_10_2_handleEvent$exported$0);
    c = cwtd_App$renderPageNavigationBuilder$lambda$_10_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderPageNavigationBuilder$lambda$_10_0_handleEvent$exported$0);
    c = cwtd_App$renderPageNavigationBuilder$lambda$_10_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderPageNavigationBuilder$lambda$_10_1_handleEvent$exported$0);
    c = cwtc_ReactView$lambda$toComponent$1$lambda$_7_0.prototype;
    c.run = $rt_callWithReceiver(cwtc_ReactView$lambda$toComponent$1$lambda$_7_0_run$exported$0);
    c = cwtd_App$CounterView$render$lambda$_1_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$CounterView$render$lambda$_1_2_handleEvent$exported$0);
    c = cwtd_App$CounterView$render$lambda$_1_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$CounterView$render$lambda$_1_1_handleEvent$exported$0);
    c = cwtd_App$CounterView$render$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$CounterView$render$lambda$_1_0_handleEvent$exported$0);
    c = cwtd_App$renderTextInputFunctional$lambda$_5_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTextInputFunctional$lambda$_5_2_handleEvent$exported$0);
    c = cwtd_App$renderTextInputFunctional$lambda$_5_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTextInputFunctional$lambda$_5_1_handleEvent$exported$0);
    c = cwtd_App$renderTextInputFunctional$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTextInputFunctional$lambda$_5_0_handleEvent$exported$0);
    c = cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$StopwatchView$lambda$render$1$lambda$_8_0_update$exported$0);
    c = cwtd_App$addTodo$lambda$_7_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$addTodo$lambda$_7_0_update$exported$0);
    c = cwtc_ReactView$lambda$toComponent$0$lambda$_8_0.prototype;
    c.call = $rt_callWithReceiver(cwtc_ReactView$lambda$toComponent$0$lambda$_8_0_call$exported$0);
    c = cwtd_App$StopwatchView$render$lambda$_3_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$StopwatchView$render$lambda$_3_1_handleEvent$exported$0);
    c = cwtd_App$StopwatchView$render$lambda$_3_0.prototype;
    c.run = $rt_callWithReceiver(cwtd_App$StopwatchView$render$lambda$_3_0_run$exported$0);
    c = cwtd_App$StopwatchView$render$lambda$_3_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$StopwatchView$render$lambda$_3_2_handleEvent$exported$0);
    c = cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderCounterBuilder$30$lambda$_34_0_update$exported$0);
    c = cwtd_App$CounterView$lambda$render$1$lambda$_5_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$CounterView$lambda$render$1$lambda$_5_0_update$exported$0);
    c = cwtd_App$main$lambda$_1_0.prototype;
    c.render = $rt_callWithReceiver(cwtd_App$main$lambda$_1_0_render$exported$0);
    c = cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0.prototype;
    c.update = $rt_callWithReceiver(cwtd_App$lambda$renderCounterFunctional$4$lambda$_60_0_update$exported$0);
    c = cwtd_App$renderUseRefDemo$lambda$_15_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderUseRefDemo$lambda$_15_0_handleEvent$exported$0);
    c = cwtd_App$renderItemListBuilder$lambda$_13_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderItemListBuilder$lambda$_13_0_handleEvent$exported$0);
    c = cwtd_App$renderTodoListFunctional$lambda$_6_2.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTodoListFunctional$lambda$_6_2_handleEvent$exported$0);
    c = cwtd_App$renderTodoListFunctional$lambda$_6_3.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTodoListFunctional$lambda$_6_3_handleEvent$exported$0);
    c = cwtd_App$renderTodoListFunctional$lambda$_6_4.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTodoListFunctional$lambda$_6_4_handleEvent$exported$0);
    c = cwtd_App$renderTodoListFunctional$lambda$_6_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTodoListFunctional$lambda$_6_0_handleEvent$exported$0);
    c = cwtd_App$renderTodoListFunctional$lambda$_6_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cwtd_App$renderTodoListFunctional$lambda$_6_1_handleEvent$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

//# sourceMappingURL=classes.js.map