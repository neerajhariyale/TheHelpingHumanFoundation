"use client";

import * as React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import qr from "@/assets/workPhotos/QR.jpg";
import { Label } from "@/components/ui/label";
import { Calendar22 } from "./Calendar22";

const categoryOptions: Record<string, string[]> = {
  Food: ["Veg Biryani", "Thaali Meals", "Feed a Home person"],
  BirthdayCelebration: ["Virtual Cake Cutting", "Birthday Cake"],
  Animal: ["Feed a Stray Dog"],
  Environment: ["Plant a tree"],
  Education: [ "Stationary Kit", "Fees-Tashwin", "Fees-Mowlish"],
  Orphange: [],
  Healthcare: ["Medicines", "Checkup", "Surgery"],
  "Donor Iksha": [], // used when editing
};

const amountMap: Record<string, number> = {
  "Feed a Home person": 30,
  "Veg Biryani": 60,
  "Thaali Meals": 60,
  "Feed a Stray Dog": 35,
  "Virtual Cake Cutting": 400,
  "Birthday Cake": 1600,
  "Plant a tree": 70,
  "Stationary Kit": 200,
  "Fees-Tashwin": 1000,
  "Fees-Mowlish": 1000,
};

interface DonateFormProps {
  isEditing?: boolean;
  initialData?: {
    name?: string;
    mobile?: string;
    email?: string;
    place?: string;
    category?: string;
    subCategory?: string;
    amount?: number;
    utr?: string;
    quantity?: number; 
    date?: string;
  };
}

const DonateForm: React.FC<DonateFormProps> = ({
  isEditing = false,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [mobile, setMobile] = useState(initialData?.mobile || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [place, setPlace] = useState(initialData?.place || "");
  const [utr, setUtr] = useState(initialData?.utr || "");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  // const [showConfetti, setShowConfetti] = useState(false);

  const [category, setCategory] = useState(
    isEditing ? "Donor Iksha" : initialData?.category || ""
  );
  const [subCategory, setSubCategory] = useState(
    initialData?.subCategory || ""
  );
  // const [amount, setAmount] = useState<number>(initialData?.amount ?? 0);
  const [amount, setAmount] = useState<number>(initialData?.amount ?? 0);
  const [quantity, setQuantity] = useState<number>(initialData?.quantity ?? 1);
  const [date, setDate] = useState(initialData?.date || "");
  const [accountDetails] = useState({
    bankName: "Canara Bank",
    accountHolderName: "RAVI PRAKASH",
    accountNumber: "2329108008789",
    ifscCode: "CNRB0002329",
    mmid: "9015541",
    branchAddress: "Opp. Session's Court, Mahaveer Circle, Pali, Rajasthan",
  });

  useEffect(() => {
    if (
      !isCustomAmount &&
      subCategory &&
      amountMap[subCategory] !== undefined
    ) {
      const baseAmount = amountMap[subCategory];
      setAmount(baseAmount * quantity);
    } else if (!subCategory && !initialData?.amount && !isCustomAmount) {
      setAmount(0);
    }
  }, [subCategory, quantity, isCustomAmount]);

  useEffect(() => {
    if (!initialData?.date) {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
    }
  }, [initialData]);

  // set default amount on subcategory select, but preserve manual edit after that
  useEffect(() => {
    if (subCategory && amountMap[subCategory] !== undefined) {
      setAmount(amountMap[subCategory]);
    } else if (!subCategory && !initialData?.amount) {
      setAmount(0);
    }
  }, [subCategory]);

  const validateEmail = (em: string) => /\S+@\S+\.\S+/.test(em);
  const validateMobile = (m: string) => /^[0-9]{10}$/.test(m);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validateEmail(email)) {
  //     toast.error("Please enter a valid email");
  //     return;
  //   }
  //   if (!validateMobile(mobile)) {
  //     toast.error("Please enter a valid 10-digit mobile number");
  //     return;
  //   }
  //   if (!name.trim() || !place.trim() || !category) {
  //     toast.success("Please fill required fields");
  //     return;
  //   }
  //   const data = {
  //     name,
  //     mobile,
  //     email,
  //     place,
  //     category,
  //     subCategory: isEditing ? undefined : subCategory,
  //     amount,
  //     utr,
  //     date,
  //     // accountNumber: accountDetails.accountNumber,
  //     // ifscCode: accountDetails.ifscCode,
  //   };
  //   console.log("Form Submitted:", data);
  //   toast.success("Form submitted successfully!");

  //   if (!isEditing) {
  //   setName("");
  //   setMobile("");
  //   setEmail("");
  //   setPlace("");
  //   setCategory("");
  //   setSubCategory("");
  //   setAmount(0);
  //   setQuantity(1);
  //   setUtr("");
  //   setIsCustomAmount(false);
  //   const today = new Date().toISOString().split("T")[0];
  //   setDate();
  // }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!validateMobile(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!name.trim() || !place.trim() || !category) {
      toast.error("Please fill required fields");
      return;
    }

    const data = {
      name,
      mobile,
      email,
      place,
      category,
      subCategory: isEditing ? undefined : subCategory,
      quantity,
      amount,
      utr,
      date,
    };
    toast.success("Redirecting to WhatsApp...");

    // Compose WhatsApp message
    const message = `
🧾 *New Donation Submission*:

👦🏻 *Name:* ${data.name}
📞 *Mobile:* ${data.mobile}
📧 *Email:* ${data.email}
📍 *Place:* ${data.place}
📅 *Date:* ${data.date}
🏷 *Category:* ${data.category} ${data.subCategory ? `☺️ *Sub-category:* ${data.subCategory}` : ""}
🔢 *Quantity:* ${data.quantity}
💰 *Amount:* ₹${data.amount}
🔁 *UTR Number:* ${data.utr}
  `;

    const whatsappNumber = "917999873846"; // Replace with NGO number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    toast.success("Redirecting to WhatsApp...");
    console.log(data);

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");

    // Clear form (if not editing)
    if (!isEditing) {
      setName("");
      setMobile("");
      setEmail("");
      setPlace("");
      setCategory("");
      setSubCategory("");
      setAmount(0);
      setQuantity(1);
      setUtr("");
      setIsCustomAmount(false);
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  return (
    <div className="w-full min-h-screen mt-5  flex flex-col justify-center items-center ">
      <Toaster />
      {/* Quote Section */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-center   mb-4">
        "Donate today —{" "}
        <span className="text-red-500">because change begins with you."</span>
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        Your donation helps us feed the hungry, educate children, and support
        the needy. Join hands with us to create a better, kinder, and hopeful
        world.
      </p>
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto bg-white shadow rounded space-y-4 border-2"
      >
        <h2 className="text-xl font-bold underline text-center ">
          {isEditing ? "Edit Donation" : "Donation Form ❤️‍🩹"}
        </h2>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="10-digit mobile"
            value={mobile}
            onChange={(e) => {
              const val = e.target.value;
              // Allow only digits and max 10 characters
              if (/^\d{0,10}$/.test(val)) {
                setMobile(val);
              }
            }}
            required
            className="mt-1"
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="place">Place</Label>
          <Input
            id="place"
            name="place"
            type="text"
            placeholder="Enter place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <Label>Category</Label>
            {isEditing ? (
              <div className="mt-1 p-2 border rounded bg-gray-100">
                {category}
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between mt-1 font-normal"
                  >
                    {category || "Select Category"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>Category</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {Object.keys(categoryOptions).map((cat) => (
                    <DropdownMenuItem
                      key={cat}
                      onSelect={() => {
                        setCategory(cat);
                        setSubCategory("");
                        setIsCustomAmount(false); // enable auto amount logic
                        setAmount(0); // clear manual amount
                        setQuantity(1); // optional reset
                      }}
                    >
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {category === "Donor Iksha" && (
            <div>
              <Label className="mb-1 block">Choose an Amount</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {[100, 200, 500, 1000, 2000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setAmount(amt);
                      setIsCustomAmount(true);
                    }}
                    className={`px-4 py-2 rounded border font-medium ${
                      amount === amt
                        ? "bg-black text-white"
                        : "bg-white text-black border-1 border-black hover:cursor-pointer"
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isEditing &&
            category &&
            categoryOptions[category]?.length > 0 &&
            !isCustomAmount && (
              <div>
                <Label>Sub Category</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between mt-1 font-normal"
                    >
                      {subCategory || "Select Subcategory"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>Sub Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categoryOptions[category].map((sub) => (
                      <DropdownMenuItem
                        key={sub}
                        onSelect={() => {
                          setSubCategory(sub);
                          setIsCustomAmount(false);
                        }}
                      >
                        {sub}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
        </div>

        {!isEditing &&
          category &&
          categoryOptions[category]?.length > 0 &&
          subCategory &&
          !isCustomAmount && (
            <div>
              <Label>Quantity</Label>
              <div className="flex items-center  gap-2 mt-2 ml-1">
                <div
                  className="w-8  border-1 border-black flex justify-center items-center  font-bold  rounded-md hover:cursor-pointer hover:bg-black hover:border-black hover:text-white "
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </div>
                <span className="font-semibold text-sm">{quantity}</span>
                <div
                  className="w-8  border-1 border-black flex justify-center items-center  font-bold  rounded-md hover:cursor-pointer hover:bg-black hover:border-black hover:text-white "
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </div>
              </div>
            </div>
          )}

        <div>
          <Label>Amount</Label>
          <Input
            className="mt-1"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={amount === 0 ? "" : amount}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) {
                const numericValue = val === "" ? 0 : parseInt(val, 10);
                setAmount(numericValue);
                setIsCustomAmount(true);
                setCategory("Donor Iksha");
                setSubCategory("");
              }
            }}
          />
        </div>

        {/* <div>
        <Label>Amount</Label>
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={amount === 0 ? "" : amount}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) {
              setAmount(val === "" ? 0 : parseInt(val, 10));
            }
          }}
          placeholder="Enter amount"
          className="mt-1"
          required
        />
      </div> */}

        <div className=" shadow-stone-400 shadow-2xl p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Scan & Donate via UPI
          </h2>
          <img
            src={qr}
            alt="Donate QR Code"
            className="w-96 mx-auto h-96  object-contain rounded-md "
          />
          <p className="text-sm text-center mt-1 text-gray-600">
            UPI ID: <span className="font-medium">6377119794@ptyes</span>
          </p>
          <p className="text-xs font-semibold text-center mt-4 mb-4">OR</p>
          <div className="p-3 border rounded bg-gray-100 text-sm">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Donate via Bank Account
            </h2>
            <p>
              <span className="font-medium">Bank Name:</span>{" "}
              {accountDetails.bankName}
            </p>
            <p>
              <span className="font-medium">Account Holder Name:</span>{" "}
              {accountDetails.accountHolderName}
            </p>
            <p>
              <span className="font-medium">Account Number:</span>{" "}
              {accountDetails.accountNumber}
            </p>
            <p>
              <span className="font-medium">IFSC Code:</span>{" "}
              {accountDetails.ifscCode}
            </p>
            <p>
              <span className="font-medium">MMID:</span> {accountDetails.mmid}
            </p>
            <p>
              <span className="font-medium">Branch Address:</span>{" "}
              {accountDetails.branchAddress}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Label>UTR Number</Label>
          <Input
            className="mt-1"
            type="text"
            inputMode="numeric"
            // pattern="[0-9]*"
            value={utr}
            onChange={(e) => {
              const val = e.target.value;
              // Allow only digits and max 10 characters
              if (/^\d{0,20}$/.test(val)) {
                setUtr(val);
              }
            }}
            required
            pattern="\d{10,20}"
            maxLength={20}
          />
        </div>

        <div>
          <Calendar22 />
        </div>
        <Button
          type="submit"
          className="w-full mt-2 bg-black text-white py-2 rounded hover:bg-white hover:text-black hover:cursor-pointer hover:border-black hover:border"
        >
          {isEditing ? "Save Changes" : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default DonateForm;
