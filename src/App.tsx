import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatEther, JsonRpcProvider } from "ethers";
import { useEffect, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

const INFURA_URL = import.meta.env.VITE_INFURA_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const account = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

function App() {
  const [balance, setBalance] = useState<string | null>(null);
  const provider = new JsonRpcProvider(`${INFURA_URL}/${API_KEY}`);

  useEffect(() => {
    (async () => {
      const newBalance = await provider.getBalance(account);
      setBalance(formatEther(newBalance));
    })();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle />
      </div>
      <div className="flex justify-center w-full p-4">
        <div className="min-w-[16rem] max-w-xl w-full">
          <Card>
            <CardHeader>
              <CardTitle>JP Wallet</CardTitle>
              <CardDescription>ETH Balance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{balance} ETH</p>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
