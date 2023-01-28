import {Adress, Network} from './class.js';

//J'écoute mon bouton pour pouvoir entré dans ma fonction entré retour
document.querySelector('#calculate').addEventListener('click', function () {

    // implementation de nos variable 
    const ip1 = document.querySelector('#ip1').valueAsNumber;
    const ip2 = document.querySelector('#ip2').valueAsNumber;
    const ip3 = document.querySelector('#ip3').valueAsNumber;
    const ip4 = document.querySelector('#ip4').valueAsNumber;

    const mask1 = document.querySelector('#mask1').valueAsNumber;
    const mask2 = document.querySelector('#mask2').valueAsNumber;
    const mask3 = document.querySelector('#mask3').valueAsNumber;
    const mask4 = document.querySelector('#mask4').valueAsNumber;

    // mes adresses ip et mask créer et enregistré dans ma class network, je peux comparé les deux via "compare()"" et ainsi créer ma nouvelle adresse sous réseaux
    const sub1 = Network.compare(ip1, mask1);
    const sub2 = Network.compare(ip2, mask2);
    const sub3 = Network.compare(ip3, mask3);
    const sub4 = Network.compare(ip4, mask4);
    
    
    let netAddr = new Adress(ip1, ip2, ip3, ip4);
    let netMask = new Adress(mask1, mask2, mask3, mask4);
    let subnet = new Adress(sub1, sub2, sub3, sub4);
    let broadcast = new Adress(ip1, ip2, ip3, mask1);//mon broadcast qui utilise des valeurs déjà saisi et enregistré
    // console.log(netAddr);
    // console.log(netMask);
    // console.log(subnet);
    // console.log(broadcast);
    let foo = new Network(netAddr, netMask, subnet, broadcast);//nouvelle constante pour une nouvelle class, celle-ci à en paramètre toute les class adress créer ainsi que les arguments nécéssaire pour créer celle dont ont a besoin grace à ses méthode
    console.log(netAddr, netMask, subnet, broadcast)

    const net_add = document.querySelector('#net_add');//return mon adresse IP
    net_add.textContent = ' Network Address: ' + foo.getNetworkAddress(netAddr);

    const net_add_bin = document.querySelector('#net_add_bin');//IP en binaire
    net_add_bin.textContent = ' Network Address Binary: ' + foo.getNetworkAddressBinary(netAddr);

    const mask_default = document.querySelector('#mask_default');
    if ( mask1 == "" || mask2 == ""|| mask3 == "" ||mask4 == "" ){
    mask_default.textContent = 'Network Mask Default: ' + foo.getClassfullMask(netMask);//si une des valeurs du mask n'est pas saisi je récupère celui par default
} else {
    mask_default.textContent = 'Mask saisie: ' + netMask;
}

    const mask2bin = document.querySelector('#net_mask_bin');
    if ( mask1 == "" || mask2 == ""|| mask3 == "" ||mask4 == "" ){
        mask2bin.textContent = 'Network Mask Default binaire: ' + foo.getClassfullMask(netMask).toBinary();
    } else {
        mask2bin.textContent = 'Mask binaire : ' + netMask.toBinary();
    }
    

    const netBits = document.querySelector('#net_bits');
    netBits.textContent = 'Net bits : ' + foo.getNetworkBits(netMask);

    const hostBits = document.querySelector('#net_host_bits');
    hostBits.textContent = " Network Host Bits: " + foo.getNetworkHostBits();

    const subBits = document.querySelector('#pot_sub_bits');
    subBits.textContent = " Potential Subnet Bits: " + foo.getPotentialSubnetBits();

    const subCount = document.querySelector('#pot_sub_count');
    subCount.textContent = " Potential Subnet Count: " + foo.getPotentialSubnetCount();

    const hostCount = document.querySelector('#net_host_count');
    hostCount.textContent = " Network Host Count: " + foo.getHostCount();
    
    const sub = document.querySelector('#subnet');
    sub.textContent = " subnet :" + subnet;
    

    const sub_bin = document.querySelector('#subnet_bin');
    sub_bin.textContent = 'subnet binaire :' + subnet.toBinary();

    const bCast = document.querySelector('#broad');
    if ( mask1 == "" || mask2 == ""|| mask3 == "" ||mask4 == "" ){
        bCast.textContent = 'Broadcast: ' + broadcast;
        // mask_default.textContent = 'Network Mask Default: ' + foo.getClassfullMask(netMask.a);
    } else {
            bCast.textContent = 'Broadcast : ' + broadcast;
        
    }

});
    
    // result.textContent = " Network Address: " + foo.getNetworkAddress() +" Network Address Binary: " + foo.getNetworkAddressBinary() + " mask default " + foo.getClassfullMask + " Network Mask: " + foo.getNetworkMask() + " Network Mask Binary: " + foo.getNetworkMaskBinary() + " Network Bits: " + foo.getNetworkBits() + " Network Host Bits: " + foo.getNetworkHostBits() + " Potential Subnet Bits: " + foo.getPotentialSubnetBits() + " Potential Subnet Count: " + foo.getPotentialSubnetCount() + " Network Host Count: " + foo.getHostCount() + " subnet :" + foo.getNetworkSubnet() + " subnet binaire : " + foo.getNetworkSubnetBinary();






    
    
    // const result = document.querySelector('#allresults');
    
    // result.innerHTML = `Adresse IP : ${netAdress}, ${netMask}`;



    // console.log( "Network Address: " + foo.getNetworkAddress());
    // console.log( "Network Address Binary: " + foo.getNetworkAddressBinary() );
    // console.log( "Network Mask: " + foo.getNetworkMask() );
    // console.log( "Network Mask Binary: " + foo.getNetworkMaskBinary() );
    // console.log( "Network Bits: " + foo.getNetworkBits() );
    // console.log( "Network Host Bits: " + foo.getNetworkHostBits() );
    // console.log( "Potential Subnet Bits: " + foo.getPotentialSubnetBits() );
    // console.log( "Potential Subnet Count: " + foo.getPotentialSubnetCount() );
    // console.log( "Network Host Count: " + foo.getHostCount() );

