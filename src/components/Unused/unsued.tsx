// {/* Core Values */}
// <motion.div
// initial={{ opacity: 0, y: 50 }}
// animate={inView ? { opacity: 1, y: 0 } : {}}
// transition={{ duration: 0.8, delay: 0.6 }}
// className="mb-20"
// >
// <h3 className="text-3xl font-bold text-primary-gray text-center mb-12">
//   Our Core Values
// </h3>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//   {values.map((value, index) => (
//     <motion.div
//       key={value.title}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//       className="text-center group"
//     >
//       <div className="w-16 h-16 bg-primary-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-cyan/20 transition-colors duration-300">
//         <value.icon className="w-8 h-8 text-primary-cyan" />
//       </div>
//       <h4 className="text-xl font-bold text-primary-gray mb-3">
//         {value.title}
//       </h4>
//       <p className="text-gray-600">{value.description}</p>
//     </motion.div>
//   ))}
// </div>
// </motion.div>

// {/* Timeline */}
// <motion.div
// initial={{ opacity: 0, y: 50 }}
// animate={inView ? { opacity: 1, y: 0 } : {}}
// transition={{ duration: 0.8, delay: 1 }}
// className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
// >
// <h3 className="text-3xl font-bold text-primary-gray text-center mb-12">
//   Our Journey
// </h3>
// <div className="relative">
//   {/* Timeline line */}
//   <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-cyan/30 transform md:-translate-x-0.5"></div>
  
//   <div className="space-y-12">
//     {timeline.map((item, index) => (
//       <motion.div
//         key={item.year}
//         initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
//         className={`relative flex items-center ${
//           index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//         }`}
//       >
//         {/* Timeline dot */}
//         <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-cyan rounded-full transform md:-translate-x-2 z-10 border-4 border-white shadow-lg"></div>
        
//         {/* Content */}
//         <div className={`ml-12 md:ml-0 md:w-1/2 ${
//           index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
//         }`}>
//           <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
//             <div className="text-2xl font-bold text-primary-cyan mb-2">
//               {item.year}
//             </div>
//             <h4 className="text-xl font-bold text-primary-gray mb-3">
//               {item.title}
//             </h4>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </div>
// </motion.div>

// {/* Team Section */}
// <motion.div
// initial={{ opacity: 0, y: 50 }}
// animate={inView ? { opacity: 1, y: 0 } : {}}
// transition={{ duration: 0.8, delay: 1.4 }}
// className="mt-20 text-center"
// >
// <h3 className="text-3xl font-bold text-primary-gray mb-6">
//   Join Our Mission
// </h3>
// <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//   We're always looking for passionate individuals who share our vision 
//   of transforming communities through sustainable development.
// </p>
// <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//   <motion.button
//     className="bg-primary-red text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-red/90 transition-colors duration-300"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     Join Our Team
//   </motion.button>
//   <motion.button
//     className="border-2 border-primary-gray text-primary-gray px-8 py-3 rounded-full font-semibold hover:bg-primary-gray hover:text-white transition-all duration-300"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     Learn More
//   </motion.button>
// </div>
// </motion.div>
// </div>


//  {/* Team Section */}
//  <motion.div
//  initial={{ opacity: 0, y: 50 }}
//  animate={inView ? { opacity: 1, y: 0 } : {}}
//  transition={{ duration: 0.8, delay: 1.4 }}
//  className="mt-20 text-center"
// >
//  <h3 className="text-3xl font-bold text-primary-gray mb-6">
//    Join Our Mission
//  </h3>
//  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//    We're always looking for passionate individuals who share our vision 
//    of transforming communities through sustainable development.
//  </p>
//  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//    <motion.button
//      className="bg-primary-red text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-red/90 transition-colors duration-300"
//      whileHover={{ scale: 1.05 }}
//      whileTap={{ scale: 0.95 }}
//    >
//      Join Our Team
//    </motion.button>
//    <motion.button
//      className="border-2 border-primary-gray text-primary-gray px-8 py-3 rounded-full font-semibold hover:bg-primary-gray hover:text-white transition-all duration-300"
//      whileHover={{ scale: 1.05 }}
//      whileTap={{ scale: 0.95 }}
//    >
//      Learn More
//    </motion.button>
//  </div>
// </motion.div>


// {/* Timeline */}
// <motion.div
// initial={{ opacity: 0, y: 50 }}
// animate={inView ? { opacity: 1, y: 0 } : {}}
// transition={{ duration: 0.8, delay: 1 }}
// className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
// >
// <h3 className="text-3xl font-bold text-primary-gray text-center mb-12">
//   Our Journey
// </h3>
// <div className="relative">
//   {/* Timeline line */}
//   <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-cyan/30 transform md:-translate-x-0.5"></div>
  
//   <div className="space-y-12">
//     {timeline.map((item, index) => (
//       <motion.div
//         key={item.year}
//         initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
//         className={`relative flex items-center ${
//           index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//         }`}
//       >
//         {/* Timeline dot */}
//         <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-cyan rounded-full transform md:-translate-x-2 z-10 border-4 border-white shadow-lg"></div>
        
//         {/* Content */}
//         <div className={`ml-12 md:ml-0 md:w-1/2 ${
//           index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
//         }`}>
//           <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
//             <div className="text-2xl font-bold text-primary-cyan mb-2">
//               {item.year}
//             </div>
//             <h4 className="text-xl font-bold text-primary-gray mb-3">
//               {item.title}
//             </h4>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </div>
// </motion.div>