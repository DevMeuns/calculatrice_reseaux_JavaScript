export {Adress};
export {Network};
//import {}

/**
 * Fonction constructeur permettant de créer un objet de type Adresse
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 * @param {Number} d 
 */

class Adress {
    constructor(a, b, c, d){
		
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
		
    }
    toString() {
		return `${this.a}.${this.b}.${this.c}.${this.d}`;
	}
	toBinary() {
		let a = parseInt(this.a).toString(2);
		a = ''.repeat( 8 - a.length ) + a;
		let b = parseInt(this.b).toString(2);
		b = ''.repeat( 8 - b.length ) + b;
		let c = parseInt(this.c).toString(2);
		c = ''.repeat( 8 - c.length ) + c;
		let d = parseInt(this.d).toString(2);
		d = ''.repeat( 8 - d.length ) + d;
		return `${a}.${b}.${c}.${d}`;
	}
    activeBits() {
        let str = this.toBinary();
            
            return (str.match(/1/g) || []).length;
    }
	
};
class Network {
	constructor( netAddr, classfull, netMask, subnet, broadcast) {
		
		this.netAddr = netAddr;
		this.netMask = netMask;
		this.classfull = classfull;
		this.subnet = subnet;
		this.broadcast = broadcast;
		
	}
	getClassfullMask() {
		
		if (this.netAddr.a > 10 && this.netAddr.a < 128 ) {
		this.classfull = 'A'	 // 1 - 127
			return this.netMask = new Adress( 255, 0, 0, 0 );
					
			} 
			else if ( this.netAddr.a > 127 && this.netAddr.a < 192 ) {
				this.classfull = 'b';// 128 - 191
				return this.netMask = new Adress( 255, 255, 0, 0 ); 
					
				}
				else if ( this.netAddr.a > 191 && this.netAddr.a < 224 ) { // 192 - 223
					this.classfull = 'c';
					return this.netMask = new Adress( 255, 255, 255, 0 );
						
				}else 	
					return this.classfull = `Class non traitée`;
				
	}
	static compare(arg1, arg2) {
		let champ = arg1 & arg2;
		return champ;
	}
	getNetworkAddress() {
		return this.netAddr.toString();
	}
	getNetworkAddressBinary() {
		return this.netAddr.toBinary();
	}
	getNetworkMask() {
		return this.netMask.toString();
	}
	getNetworkMaskBinary() {
		return this.netMask.toBinary();
	}
	getNetworkBits() {
		return this.netMask.activeBits();
	}
	getNetworkSubnet() {
		return this.subnet.toString();
		}
	getNetworkSubnetBinary() {
		return this.subnet.toBinary();
	}
	getNetworkHostBits() {
		return (32 - this.netMask.activeBits());
	}
	getPotentialSubnetBits() {
		return (32 - this.netMask.activeBits() - 2);
	}
	
	getPotentialSubnetCount() {
		return Math.pow( 2, this.netMask.activeBits() % 8 )
	}
	getHostCount() {
		return (Math.pow(2, 32 - this.netMask.activeBits()) - 2);
	}
}


// console.log( "Network Address: " + foo.getNetworkAddress() );
// console.log( "Network Address Binary: " + foo.getNetworkAddressBinary() );
// console.log( "Network Mask: " + foo.getNetworkMask() );
// console.log( "Network Mask Binary: " + foo.getNetworkMaskBinary() );
// console.log( "Network Bits: " + foo.getNetworkBits() );
// console.log( "Network Host Bits: " + foo.getNetworkHostBits() );
// console.log( "Potential Subnet Bits: " + foo.getPotentialSubnetBits() );
// console.log( "Potential Subnet Count: " + foo.getPotentialSubnetCount() );
// console.log( "Network Host Count: " + foo.getHostCount() );
