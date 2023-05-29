import { createContext, useContext, useState } from "react";

const BalanceContext = createContext<number | undefined>(undefined);
const Account = () => {

    const [balance, setBalance] = useState<number>(1000);
    return (
        <div>
            <BalanceContext.Provider value={balance}>
                <Credit />
                <Debit />
            </BalanceContext.Provider>
        </div>
    );
}

const Credit = () => {
    const balance = useContext(BalanceContext);
    return ( 
        <h4>{balance} post crediting</h4>
     );
}

const Debit = () => {
    const balance = useContext(BalanceContext);
    return (  
        <h4>{balance} post debiting</h4>
    );
}

export default Account;