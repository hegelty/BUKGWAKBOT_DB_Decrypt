/**
 * 원저작자 : Hibot(https://github.com/hui1601/libdream)
 * 수정 : hegelty
 * 라이선스 :  GPL3.0
 */

 importClass(android.util.Base64);

 const dream_arr1 = ['adrp.ldrsh.ldnp', 'ldpsw', 'umax', 'stnp.rsubhn', 'sqdmlsl', 'uqrshl.csel', 'sqshlu', 'umin.usubl.umlsl', 'cbnz.adds', 'tbnz', 'usubl2', 'stxr', 'sbfx', 'strh', 'stxrb.adcs', 'stxrh', 'ands.urhadd', 'subs', 'sbcs', 'fnmadd.ldxrb.saddl', 'stur', 'ldrsb', 'strb', 'prfm', 'ubfiz', 'ldrsw.madd.msub.sturb.ldursb', 'ldrb', 'b.eq', 'ldur.sbfiz', 'extr', 'fmadd', 'uqadd', 'sshr.uzp1.sttrb', 'umlsl2', 'rsubhn2.ldrh.uqsub', 'uqshl', 'uabd', 'ursra', 'usubw', 'uaddl2', 'b.gt', 'b.lt', 'sqshl', 'bics', 'smin.ubfx', 'smlsl2', 'uabdl2', 'zip2.ssubw2', 'ccmp', 'sqdmlal', 'b.al', 'smax.ldurh.uhsub', 'fcvtxn2', 'b.pl'],
 dream_arr2 = ['saddl', 'urhadd', 'ubfiz.sqdmlsl.tbnz.stnp', 'smin', 'strh', 'ccmp', 'usubl', 'umlsl', 'uzp1', 'sbfx', 'b.eq', 'zip2.prfm.strb', 'msub', 'b.pl', 'csel', 'stxrh.ldxrb', 'uqrshl.ldrh', 'cbnz', 'ursra', 'sshr.ubfx.ldur.ldnp', 'fcvtxn2', 'usubl2', 'uaddl2', 'b.al', 'ssubw2', 'umax', 'b.lt', 'adrp.sturb', 'extr', 'uqshl', 'smax', 'uqsub.sqshlu', 'ands', 'madd', 'umin', 'b.gt', 'uabdl2', 'ldrsb.ldpsw.rsubhn', 'uqadd', 'sttrb', 'stxr', 'adds', 'rsubhn2.umlsl2', 'sbcs.fmadd', 'usubw', 'sqshl', 'stur.ldrsh.smlsl2', 'ldrsw', 'fnmadd', 'stxrb.sbfiz', 'adcs', 'bics.ldrb', 'ldursb', 'subs.uhsub', 'ldurh', 'uabd', 'sqdmlal'];
 
 function dream(param){
     return dream_arr1[param % 54] + '.' + dream_arr2[(param + 31) % 57];
 }
 /* DREAM END */
 function toByteArray(bytes) {
     let res = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, bytes.length);
     for (let i = 0; i < bytes.length; i ++) {
         res[i] = new java.lang.Integer(bytes[i]).byteValue();
     }
     return res;
 }
 function toCharArray(chars) {
     return String.fromCharCode.apply(null, chars).split('');
 }
 
 function decrypt(userId, enc, text) {
     if(text == null) return null;
     try {
         decrypt.cipher.init(2, new javax.crypto.spec.SecretKeySpec(javax.crypto.SecretKeyFactory.getInstance('PBEWITHSHAAND256BITAES-CBC-BC').generateSecret(new javax.crypto.spec.PBEKeySpec(decrypt.password, new java.lang.String((decrypt.prefixes[enc] + userId).slice(0, 16).padEnd(16, '\0')).getBytes('UTF-8'), 2, 256)).getEncoded(), 'AES'), new javax.crypto.spec.IvParameterSpec(decrypt.iv));
         return '' + new java.lang.String(decrypt.cipher.doFinal(Base64.decode(text, 0)), 'UTF-8');
     } catch (e) {
         Log.error(e.lineNumber + ': ' + e);
         return null;
     }
 }
 decrypt.iv = toByteArray([15, 8, 1, 0, 25, 71, 37, -36, 21, -11, 23, -32, -31, 21, 12, 53]);
 decrypt.password = toCharArray([22, 8, 9, 111, 2, 23, 43, 8, 33, 33, 10, 16, 3, 3, 7, 6]);
 decrypt.prefixes = ['', '', '12', '24', '18', '30', '36', '12', '48', '7', '35', '40', '17', '23', '29', 'isabel', 'kale', 'sulli', 'van', 'merry', 'kyle', 'james', 'maddux', 'tony', 'hayden', 'paul', 'elijah', 'dorothy', 'sally', 'bran', dream(0xcad63)];
 decrypt.cipher = javax.crypto.Cipher.getInstance('AES/CBC/PKCS5Padding');