"use client"

import SelectIssue from '@/components/SelectIssue'
import React, { useState } from 'react'
import { FaUpload, FaSearch, FaExclamationCircle } from 'react-icons/fa'

export default function VirtualMechanicPage() {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    engineType: '',
    vin: ''
  })
  const [symptomInput, setSymptomInput] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [diagnosis, setDiagnosis] = useState<string | null>(null)
  const [recommendedParts, setRecommendedParts] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<'vehicle' | 'symptom'>('vehicle')
  const [dragOver, setDragOver] = useState(false)

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setVehicleInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSymptomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate AI analysis based on symptoms
    setDiagnosis("Based on the symptoms described, it appears you may have an issue with your brake system.")
    setRecommendedParts(['Brake Pads', 'Brake Rotors', 'Brake Fluid', 'Brake Caliper'])
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Virtual Mechanic Assistance</h1>

      {/* Vehicle Information Input */}
      {activeTab === 'vehicle' && (
        <div className="p-6 bg-white shadow rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>
          <input type="text" name="make" placeholder="Make" value={vehicleInfo.make} onChange={handleVehicleChange} className="mb-4 p-2 border rounded bg-gray-300 mx-2" />
          <input type="text" name="model" placeholder="Model" value={vehicleInfo.model} onChange={handleVehicleChange} className="mb-4 p-2 border rounded bg-gray-300 mx-2" />
          <input type="text" name="year" placeholder="Year" value={vehicleInfo.year} onChange={handleVehicleChange} className="mb-4 p-2 border rounded bg-gray-300 mx-2" />
          <input type="text" name="engineType" placeholder="Engine Type" value={vehicleInfo.engineType} onChange={handleVehicleChange} className="mb-4 p-2 border rounded bg-gray-300 mx-2" />
          <input type="text" name="vin" placeholder="VIN" value={vehicleInfo.vin} onChange={handleVehicleChange} className="mb-4 p-2 border rounded bg-gray-300 mx-2" />
        </div>
      )}

      {/**Select issue or write one */}
      <div className='flex flex-col'>
        <h3>Select Issues or Describe what is Happening with your Automobile</h3>
        <SelectIssue/>
      </div>

      {/* Symptom Checker */}
      {activeTab === 'symptom' && (
        <div>
          <div className="p-6 bg-white shadow rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Describe Your Car's Symptoms</h2>
            <form onSubmit={handleSymptomSubmit}>
              <textarea
                placeholder="Describe the problem you're experiencing with your car..."
                value={symptomInput}
                onChange={(e) => setSymptomInput(e.target.value)}
                className="w-full p-4 border bg-white border-gray-300 rounded-lg mb-4"
                rows={4}
              />

              {/* Custom Drag and Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center ${dragOver ? 'border-blue-500' : 'border-gray-300'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <p className="text-gray-500">Drag & drop files here or click to select files</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="fileUpload"
                />
                <label htmlFor="fileUpload" className="cursor-pointer text-blue-600 underline">Select Files</label>
              </div>

              {/* Display Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <ul className="mt-4">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="mt-2">{file.name}</li>
                  ))}
                </ul>
              )}

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center mt-4"
              >
                <FaSearch className="mr-2" /> Analyze Symptoms
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Diagnosis and Recommended Parts */}
      {diagnosis && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI Diagnosis</h2>
          <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg flex items-center">
            <FaExclamationCircle className="mr-2" />
            <div><strong>Diagnostic Result:</strong> {diagnosis}</div>
          </div>
        </div>
      )}

      {recommendedParts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Parts & Fixes</h2>
          {recommendedParts.map((part, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg mb-2">
              {part}
            </div>
          ))}
        </div>
      )}

      {/* Navigation between Vehicle Info and Symptom Checker */}
      <button onClick={() => setActiveTab(activeTab === 'vehicle' ? 'symptom' : 'vehicle')} className={`mt-4 ${activeTab === 'vehicle' ? 'bg-blue-600' : 'bg-gray-200'} text-white px-4 py-2`}>
        Switch to {activeTab === 'vehicle' ? 'Symptom Checker' : 'Vehicle Info'}
      </button>
    </div>
  )
}












// 'use client'

// import React, { useState } from 'react'
// import { FaUpload, FaSearch, FaExclamationCircle } from 'react-icons/fa'

// export default function VirtualMechanicPage() {
//   const [symptomInput, setSymptomInput] = useState('')
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null)
//   const [diagnosis, setDiagnosis] = useState<string | null>(null)
//   const [recommendedParts, setRecommendedParts] = useState<string[]>([])
//   const [activeTab, setActiveTab] = useState<'symptom' | 'image'>('symptom')

//   const handleSymptomSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setDiagnosis(
//       "Based on the symptoms described, it appears you may have an issue with your brake system."
//     )
//     setRecommendedParts([
//       'Brake Pads',
//       'Brake Rotors',
//       'Brake Fluid',
//       'Brake Caliper'
//     ])
//   }

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setUploadedImage(reader.result as string)
//         setDiagnosis(
//           "The image suggests wear on your vehicle's suspension components."
//         )
//         setRecommendedParts([
//           'Shock Absorbers',
//           'Strut Assembly',
//           'Control Arm',
//           'Ball Joint'
//         ])
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault()
//     const file = e.dataTransfer.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setUploadedImage(reader.result as string)
//         setDiagnosis(
//           "The image suggests wear on your vehicle's suspension components."
//         )
//         setRecommendedParts([
//           'Shock Absorbers',
//           'Strut Assembly',
//           'Control Arm',
//           'Ball Joint'
//         ])
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Virtual Mechanic Assistance</h1>

//       {/* Tabs */}
//       <div className="flex mb-8">
//         <button
//           onClick={() => setActiveTab('symptom')}
//           className={`p-2 w-1/2 text-center ${activeTab === 'symptom' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//         >
//           Describe Symptoms
//         </button>
//         <button
//           onClick={() => setActiveTab('image')}
//           className={`p-2 w-1/2 text-center ${activeTab === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//         >
//           Upload Image
//         </button>
//       </div>

//       {/* Tab content */}
//       {activeTab === 'symptom' && (
//         <div>
//           {/* Describe Symptoms Form */}
//           <div className="p-6 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Describe Your Car's Symptoms</h2>
//             <form onSubmit={handleSymptomSubmit}>
//               <textarea
//                 placeholder="Describe the problem you're experiencing with your car..."
//                 value={symptomInput}
//                 onChange={(e) => setSymptomInput(e.target.value)}
//                 className="w-full p-4 border bg-white dark:bg-gray-200 border-gray-300 rounded-lg mb-4"
//                 rows={4}
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
//               >
//                 <FaSearch className="mr-2" /> Analyze Symptoms
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {activeTab === 'image' && (
//         <div>
//           {/* Upload Image Form */}
//           <div className="p-6 bg-white shadow rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Upload an Image of the Issue</h2>
//             <div
//               className="flex items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50"
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//             >
//               <input
//                 type="file"
//                 className="hidden"
//                 id="file-input"
//                 onChange={handleImageUpload}
//                 accept="image/*"
//               />
//               <label htmlFor="file-input" className="flex flex-col items-center justify-center">
//                 {uploadedImage ? (
//                   <img
//                     src={uploadedImage}
//                     alt="Uploaded"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 ) : (
//                   <div className="flex flex-col items-center justify-center">
//                     <FaUpload className="text-gray-400 text-4xl mb-2" />
//                     <p className="text-sm text-gray-500">
//                       <span className="font-semibold">Drag and drop</span> or click to upload
//                     </p>
//                     <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 800x400px)</p>
//                   </div>
//                 )}
//               </label>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Diagnosis and Recommended Parts */}
//       {diagnosis && (
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">AI Diagnosis</h2>
//           <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg flex items-center">
//             <FaExclamationCircle className="mr-2" />
//             <div>
//               <strong>Diagnostic Result:</strong> {diagnosis}
//             </div>
//           </div>
//         </div>
//       )}

//       {recommendedParts.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Recommended Parts & Fixes</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {recommendedParts.map((part, index) => (
//               <div key={index} className="p-4 bg-white shadow rounded-lg">
//                 <img
//                   src={`/img/brakepads.png`}
//                   alt={part}
//                   className="w-full h-32 object-cover rounded-lg mb-2"
//                 />
//                 <h3 className="text-center font-semibold">{part}</h3>
//                 <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg">
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
