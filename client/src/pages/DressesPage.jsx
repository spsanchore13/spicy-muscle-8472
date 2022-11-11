import React from 'react'

const DressesPage = () => {
  return (
    <Box>
      <Productheader />
      <Box display="flex" mt={5}>
        <Sidebar2 />

        {/* <SimpleSidebar /> */}

        <Box>
          <ShoesProducts />
        </Box>
      </Box>
    </Box>
  )
}

export default DressesPage