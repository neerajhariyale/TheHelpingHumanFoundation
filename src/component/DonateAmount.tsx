// ✅ File: DonateAmount.tsx
import React, { useState} from "react";
import { useLocation } from "react-router-dom";

const DonateAmount = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount") || "";
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    screenshot: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "screenshot" && files) {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const { name, mobile, screenshot } = formData;

    if (!name || !mobile || !screenshot) {
      alert("Please fill all fields and upload screenshot.");
      return;
    }

    const message = `New Donation Received via Website:
Name: ${name}
Mobile: ${mobile}
Category: ${category}
Donation Type: ${type}
Amount: ₹${amount}
Screenshot: ${screenshot.name}`;

    const whatsappURL = `https://wa.me/917999873846?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Donate Now</h2>
      <p className="mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="mb-2">
        <strong>Donation Type:</strong> {type}
      </p>
      <p className="mb-4">
        <strong>Amount:</strong> ₹{amount}
      </p>

      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          className="w-full border p-2 rounded"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Upload Payment Screenshot</label>
        <input
          type="file"
          name="screenshot"
          accept="image/*"
          className="w-full"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Submit & Send on WhatsApp
      </button>
    </div>
  );
};

export default DonateAmount;
