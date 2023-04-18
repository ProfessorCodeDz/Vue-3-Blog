import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: "f47f023364c",
      title: "How to create a blog using Vue.js, Pinia, and Tailwind Css",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh libero, bibendum quis mattis eu, dapibus quis sem. Mauris bibendum elit nisl, at condimentum quam venenatis sed. Nulla at justo sit amet quam imperdiet sagittis rhoncus in enim. Quisque sit amet pulvinar libero. Maecenas porta mi nec sodales vehicula. Duis porttitor, tortor eget eleifend maximus, libero libero tristique magna, sit amet laoreet purus eros ut tortor. Etiam vitae metus mollis, ultricies mi eget, egestas turpis. Etiam congue leo orci, a rhoncus sem tempus et.

      Donec gravida at ante mattis lacinia. Donec posuere consequat molestie. Nulla facilisi. Aliquam et est rhoncus, fringilla magna eget, semper est. Vestibulum fermentum luctus lectus mollis vehicula. Vestibulum ultrices ut turpis vitae finibus. Proin ut vestibulum purus. Donec vulputate pellentesque lectus.
      
      Donec volutpat vulputate erat, non vulputate ipsum maximus vel. In non odio eget massa imperdiet sollicitudin vel porttitor nunc. Maecenas lacinia dui ac finibus auctor. Sed mollis egestas est quis elementum. Fusce vitae imperdiet ligula. In vestibulum nisi nec lorem malesuada finibus. Aenean sollicitudin ullamcorper commodo. Vestibulum volutpat velit et consequat lobortis. In non venenatis mauris. Maecenas quam lectus, vulputate viverra hendrerit ac, tempus vel lacus. Donec ac maximus sapien.
      
      Nulla nec tristique odio. Vestibulum consequat semper purus non auctor. Aliquam accumsan posuere rhoncus. Sed condimentum justo id justo venenatis, ut pulvinar tellus commodo. Etiam turpis felis, tristique ut molestie eget, rutrum sit amet mauris. Integer varius ex felis, sed ullamcorper ipsum semper non. Vestibulum feugiat faucibus vehicula. In ornare finibus nisl sed tincidunt. Curabitur imperdiet quis tellus ut sagittis. Vestibulum malesuada odio accumsan metus congue laoreet. Nullam quis augue vel erat pharetra vestibulum sed sed velit. Nullam eget aliquam leo. Quisque eu vehicula magna. Curabitur hendrerit libero quis blandit dictum. Vestibulum arcu felis, tincidunt vel pulvinar aliquam, ullamcorper nec orci. Aliquam bibendum ultrices ipsum non tincidunt.
      
      Curabitur accumsan neque a magna faucibus rhoncus. Nunc facilisis neque ligula, faucibus elementum lacus scelerisque et. Aenean quis viverra felis. Proin iaculis enim et diam dapibus, in hendrerit ipsum pretium. Ut nec nisi massa. Nullam blandit lorem gravida finibus dignissim. Nam tellus dui, elementum ut pellentesque in, varius at erat. Vestibulum posuere tincidunt gravida. Nullam viverra dui nec metus tincidunt molestie. Nunc consectetur quam ac euismod imperdiet. Donec ex quam, tempus id varius sed, ullamcorper vitae ipsum. Maecenas lobortis nibh leo, a luctus nisl lacinia eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a neque ac libero porta commodo ac ut dolor.
      
      Donec condimentum eros at tristique rutrum. Morbi pulvinar feugiat aliquet. Vivamus eu pharetra dui. Donec massa nunc, blandit vulputate venenatis bibendum, vestibulum vel tortor. Phasellus vulputate luctus nunc, vulputate viverra dui vestibulum ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tincidunt neque ac auctor sollicitudin. Donec enim felis, blandit a scelerisque in, dapibus commodo tellus. Sed at leo fringilla, facilisis nunc quis, pellentesque purus. Maecenas placerat nisl a metus consequat, vel sodales purus blandit. Ut massa diam, vestibulum vel ligula vitae, pulvinar vestibulum tortor. Praesent quis pretium libero. Praesent quis viverra metus, eu tincidunt odio. Vestibulum in orci arcu. Morbi viverra aliquam elit ut tempor. Suspendisse euismod orci nec arcu egestas lacinia.
      
      Proin hendrerit dolor ut maximus rhoncus. Integer vel pretium mi, eget porttitor odio. Morbi arcu magna, pulvinar vel nibh pellentesque, pretium volutpat tellus. Vivamus imperdiet orci ac nisl ultrices finibus. Curabitur eu orci tempor dui tincidunt vehicula quis ac massa. Nunc vel ipsum arcu. Sed ut ornare est, quis varius mauris. Quisque malesuada lacinia est. Suspendisse feugiat consectetur justo, non venenatis ipsum semper vel.
      
      Vivamus faucibus volutpat lorem quis mattis. Aliquam aliquet tortor nec tempus cursus. Nulla facilisi. Praesent mauris justo, pulvinar at ultrices in, imperdiet at ipsum. Quisque nisl lectus, vehicula sodales faucibus cursus, tincidunt at nisl. Donec sed ornare erat, a mollis mauris. Nam semper sodales maximus. Aenean in urna cursus, convallis erat vel, vehicula odio.`,
      date: "04/04/2023"
    },
    {
      id: "47f023364c9",
      title: "Moving from Vue 2 to Vue 3",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh libero, bibendum quis mattis eu, dapibus quis sem. Mauris bibendum elit nisl, at condimentum quam venenatis sed. Nulla at justo sit amet quam imperdiet sagittis rhoncus in enim. Quisque sit amet pulvinar libero. Maecenas porta mi nec sodales vehicula. Duis porttitor, tortor eget eleifend maximus, libero libero tristique magna, sit amet laoreet purus eros ut tortor. Etiam vitae metus mollis, ultricies mi eget, egestas turpis. Etiam congue leo orci, a rhoncus sem tempus et.

      Donec gravida at ante mattis lacinia. Donec posuere consequat molestie. Nulla facilisi. Aliquam et est rhoncus, fringilla magna eget, semper est. Vestibulum fermentum luctus lectus mollis vehicula. Vestibulum ultrices ut turpis vitae finibus. Proin ut vestibulum purus. Donec vulputate pellentesque lectus.
      
      Donec volutpat vulputate erat, non vulputate ipsum maximus vel. In non odio eget massa imperdiet sollicitudin vel porttitor nunc. Maecenas lacinia dui ac finibus auctor. Sed mollis egestas est quis elementum. Fusce vitae imperdiet ligula. In vestibulum nisi nec lorem malesuada finibus. Aenean sollicitudin ullamcorper commodo. Vestibulum volutpat velit et consequat lobortis. In non venenatis mauris. Maecenas quam lectus, vulputate viverra hendrerit ac, tempus vel lacus. Donec ac maximus sapien.
      
      Nulla nec tristique odio. Vestibulum consequat semper purus non auctor. Aliquam accumsan posuere rhoncus. Sed condimentum justo id justo venenatis, ut pulvinar tellus commodo. Etiam turpis felis, tristique ut molestie eget, rutrum sit amet mauris. Integer varius ex felis, sed ullamcorper ipsum semper non. Vestibulum feugiat faucibus vehicula. In ornare finibus nisl sed tincidunt. Curabitur imperdiet quis tellus ut sagittis. Vestibulum malesuada odio accumsan metus congue laoreet. Nullam quis augue vel erat pharetra vestibulum sed sed velit. Nullam eget aliquam leo. Quisque eu vehicula magna. Curabitur hendrerit libero quis blandit dictum. Vestibulum arcu felis, tincidunt vel pulvinar aliquam, ullamcorper nec orci. Aliquam bibendum ultrices ipsum non tincidunt.
      
      Curabitur accumsan neque a magna faucibus rhoncus. Nunc facilisis neque ligula, faucibus elementum lacus scelerisque et. Aenean quis viverra felis. Proin iaculis enim et diam dapibus, in hendrerit ipsum pretium. Ut nec nisi massa. Nullam blandit lorem gravida finibus dignissim. Nam tellus dui, elementum ut pellentesque in, varius at erat. Vestibulum posuere tincidunt gravida. Nullam viverra dui nec metus tincidunt molestie. Nunc consectetur quam ac euismod imperdiet. Donec ex quam, tempus id varius sed, ullamcorper vitae ipsum. Maecenas lobortis nibh leo, a luctus nisl lacinia eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a neque ac libero porta commodo ac ut dolor.
      
      Donec condimentum eros at tristique rutrum. Morbi pulvinar feugiat aliquet. Vivamus eu pharetra dui. Donec massa nunc, blandit vulputate venenatis bibendum, vestibulum vel tortor. Phasellus vulputate luctus nunc, vulputate viverra dui vestibulum ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tincidunt neque ac auctor sollicitudin. Donec enim felis, blandit a scelerisque in, dapibus commodo tellus. Sed at leo fringilla, facilisis nunc quis, pellentesque purus. Maecenas placerat nisl a metus consequat, vel sodales purus blandit. Ut massa diam, vestibulum vel ligula vitae, pulvinar vestibulum tortor. Praesent quis pretium libero. Praesent quis viverra metus, eu tincidunt odio. Vestibulum in orci arcu. Morbi viverra aliquam elit ut tempor. Suspendisse euismod orci nec arcu egestas lacinia.
      
      Proin hendrerit dolor ut maximus rhoncus. Integer vel pretium mi, eget porttitor odio. Morbi arcu magna, pulvinar vel nibh pellentesque, pretium volutpat tellus. Vivamus imperdiet orci ac nisl ultrices finibus. Curabitur eu orci tempor dui tincidunt vehicula quis ac massa. Nunc vel ipsum arcu. Sed ut ornare est, quis varius mauris. Quisque malesuada lacinia est. Suspendisse feugiat consectetur justo, non venenatis ipsum semper vel.
      
      Vivamus faucibus volutpat lorem quis mattis. Aliquam aliquet tortor nec tempus cursus. Nulla facilisi. Praesent mauris justo, pulvinar at ultrices in, imperdiet at ipsum. Quisque nisl lectus, vehicula sodales faucibus cursus, tincidunt at nisl. Donec sed ornare erat, a mollis mauris. Nam semper sodales maximus. Aenean in urna cursus, convallis erat vel, vehicula odio.`,
      date: "04/04/2023"
    },
    {
      id: "7f023364c9f",
      title: "How to create a chrome extenion using React.js",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh libero, bibendum quis mattis eu, dapibus quis sem. Mauris bibendum elit nisl, at condimentum quam venenatis sed. Nulla at justo sit amet quam imperdiet sagittis rhoncus in enim. Quisque sit amet pulvinar libero. Maecenas porta mi nec sodales vehicula. Duis porttitor, tortor eget eleifend maximus, libero libero tristique magna, sit amet laoreet purus eros ut tortor. Etiam vitae metus mollis, ultricies mi eget, egestas turpis. Etiam congue leo orci, a rhoncus sem tempus et.

      Donec gravida at ante mattis lacinia. Donec posuere consequat molestie. Nulla facilisi. Aliquam et est rhoncus, fringilla magna eget, semper est. Vestibulum fermentum luctus lectus mollis vehicula. Vestibulum ultrices ut turpis vitae finibus. Proin ut vestibulum purus. Donec vulputate pellentesque lectus.
      
      Donec volutpat vulputate erat, non vulputate ipsum maximus vel. In non odio eget massa imperdiet sollicitudin vel porttitor nunc. Maecenas lacinia dui ac finibus auctor. Sed mollis egestas est quis elementum. Fusce vitae imperdiet ligula. In vestibulum nisi nec lorem malesuada finibus. Aenean sollicitudin ullamcorper commodo. Vestibulum volutpat velit et consequat lobortis. In non venenatis mauris. Maecenas quam lectus, vulputate viverra hendrerit ac, tempus vel lacus. Donec ac maximus sapien.
      
      Nulla nec tristique odio. Vestibulum consequat semper purus non auctor. Aliquam accumsan posuere rhoncus. Sed condimentum justo id justo venenatis, ut pulvinar tellus commodo. Etiam turpis felis, tristique ut molestie eget, rutrum sit amet mauris. Integer varius ex felis, sed ullamcorper ipsum semper non. Vestibulum feugiat faucibus vehicula. In ornare finibus nisl sed tincidunt. Curabitur imperdiet quis tellus ut sagittis. Vestibulum malesuada odio accumsan metus congue laoreet. Nullam quis augue vel erat pharetra vestibulum sed sed velit. Nullam eget aliquam leo. Quisque eu vehicula magna. Curabitur hendrerit libero quis blandit dictum. Vestibulum arcu felis, tincidunt vel pulvinar aliquam, ullamcorper nec orci. Aliquam bibendum ultrices ipsum non tincidunt.
      
      Curabitur accumsan neque a magna faucibus rhoncus. Nunc facilisis neque ligula, faucibus elementum lacus scelerisque et. Aenean quis viverra felis. Proin iaculis enim et diam dapibus, in hendrerit ipsum pretium. Ut nec nisi massa. Nullam blandit lorem gravida finibus dignissim. Nam tellus dui, elementum ut pellentesque in, varius at erat. Vestibulum posuere tincidunt gravida. Nullam viverra dui nec metus tincidunt molestie. Nunc consectetur quam ac euismod imperdiet. Donec ex quam, tempus id varius sed, ullamcorper vitae ipsum. Maecenas lobortis nibh leo, a luctus nisl lacinia eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a neque ac libero porta commodo ac ut dolor.
      
      Donec condimentum eros at tristique rutrum. Morbi pulvinar feugiat aliquet. Vivamus eu pharetra dui. Donec massa nunc, blandit vulputate venenatis bibendum, vestibulum vel tortor. Phasellus vulputate luctus nunc, vulputate viverra dui vestibulum ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tincidunt neque ac auctor sollicitudin. Donec enim felis, blandit a scelerisque in, dapibus commodo tellus. Sed at leo fringilla, facilisis nunc quis, pellentesque purus. Maecenas placerat nisl a metus consequat, vel sodales purus blandit. Ut massa diam, vestibulum vel ligula vitae, pulvinar vestibulum tortor. Praesent quis pretium libero. Praesent quis viverra metus, eu tincidunt odio. Vestibulum in orci arcu. Morbi viverra aliquam elit ut tempor. Suspendisse euismod orci nec arcu egestas lacinia.
      
      Proin hendrerit dolor ut maximus rhoncus. Integer vel pretium mi, eget porttitor odio. Morbi arcu magna, pulvinar vel nibh pellentesque, pretium volutpat tellus. Vivamus imperdiet orci ac nisl ultrices finibus. Curabitur eu orci tempor dui tincidunt vehicula quis ac massa. Nunc vel ipsum arcu. Sed ut ornare est, quis varius mauris. Quisque malesuada lacinia est. Suspendisse feugiat consectetur justo, non venenatis ipsum semper vel.
      
      Vivamus faucibus volutpat lorem quis mattis. Aliquam aliquet tortor nec tempus cursus. Nulla facilisi. Praesent mauris justo, pulvinar at ultrices in, imperdiet at ipsum. Quisque nisl lectus, vehicula sodales faucibus cursus, tincidunt at nisl. Donec sed ornare erat, a mollis mauris. Nam semper sodales maximus. Aenean in urna cursus, convallis erat vel, vehicula odio.`,
      date: "04/04/2023"
    },
    {
      id: "f023364c9fe",
      title: "Why Next.js is better than React.js?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh libero, bibendum quis mattis eu, dapibus quis sem. Mauris bibendum elit nisl, at condimentum quam venenatis sed. Nulla at justo sit amet quam imperdiet sagittis rhoncus in enim. Quisque sit amet pulvinar libero. Maecenas porta mi nec sodales vehicula. Duis porttitor, tortor eget eleifend maximus, libero libero tristique magna, sit amet laoreet purus eros ut tortor. Etiam vitae metus mollis, ultricies mi eget, egestas turpis. Etiam congue leo orci, a rhoncus sem tempus et.

      Donec gravida at ante mattis lacinia. Donec posuere consequat molestie. Nulla facilisi. Aliquam et est rhoncus, fringilla magna eget, semper est. Vestibulum fermentum luctus lectus mollis vehicula. Vestibulum ultrices ut turpis vitae finibus. Proin ut vestibulum purus. Donec vulputate pellentesque lectus.
      
      Donec volutpat vulputate erat, non vulputate ipsum maximus vel. In non odio eget massa imperdiet sollicitudin vel porttitor nunc. Maecenas lacinia dui ac finibus auctor. Sed mollis egestas est quis elementum. Fusce vitae imperdiet ligula. In vestibulum nisi nec lorem malesuada finibus. Aenean sollicitudin ullamcorper commodo. Vestibulum volutpat velit et consequat lobortis. In non venenatis mauris. Maecenas quam lectus, vulputate viverra hendrerit ac, tempus vel lacus. Donec ac maximus sapien.
      
      Nulla nec tristique odio. Vestibulum consequat semper purus non auctor. Aliquam accumsan posuere rhoncus. Sed condimentum justo id justo venenatis, ut pulvinar tellus commodo. Etiam turpis felis, tristique ut molestie eget, rutrum sit amet mauris. Integer varius ex felis, sed ullamcorper ipsum semper non. Vestibulum feugiat faucibus vehicula. In ornare finibus nisl sed tincidunt. Curabitur imperdiet quis tellus ut sagittis. Vestibulum malesuada odio accumsan metus congue laoreet. Nullam quis augue vel erat pharetra vestibulum sed sed velit. Nullam eget aliquam leo. Quisque eu vehicula magna. Curabitur hendrerit libero quis blandit dictum. Vestibulum arcu felis, tincidunt vel pulvinar aliquam, ullamcorper nec orci. Aliquam bibendum ultrices ipsum non tincidunt.
      
      Curabitur accumsan neque a magna faucibus rhoncus. Nunc facilisis neque ligula, faucibus elementum lacus scelerisque et. Aenean quis viverra felis. Proin iaculis enim et diam dapibus, in hendrerit ipsum pretium. Ut nec nisi massa. Nullam blandit lorem gravida finibus dignissim. Nam tellus dui, elementum ut pellentesque in, varius at erat. Vestibulum posuere tincidunt gravida. Nullam viverra dui nec metus tincidunt molestie. Nunc consectetur quam ac euismod imperdiet. Donec ex quam, tempus id varius sed, ullamcorper vitae ipsum. Maecenas lobortis nibh leo, a luctus nisl lacinia eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a neque ac libero porta commodo ac ut dolor.
      
      Donec condimentum eros at tristique rutrum. Morbi pulvinar feugiat aliquet. Vivamus eu pharetra dui. Donec massa nunc, blandit vulputate venenatis bibendum, vestibulum vel tortor. Phasellus vulputate luctus nunc, vulputate viverra dui vestibulum ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tincidunt neque ac auctor sollicitudin. Donec enim felis, blandit a scelerisque in, dapibus commodo tellus. Sed at leo fringilla, facilisis nunc quis, pellentesque purus. Maecenas placerat nisl a metus consequat, vel sodales purus blandit. Ut massa diam, vestibulum vel ligula vitae, pulvinar vestibulum tortor. Praesent quis pretium libero. Praesent quis viverra metus, eu tincidunt odio. Vestibulum in orci arcu. Morbi viverra aliquam elit ut tempor. Suspendisse euismod orci nec arcu egestas lacinia.
      
      Proin hendrerit dolor ut maximus rhoncus. Integer vel pretium mi, eget porttitor odio. Morbi arcu magna, pulvinar vel nibh pellentesque, pretium volutpat tellus. Vivamus imperdiet orci ac nisl ultrices finibus. Curabitur eu orci tempor dui tincidunt vehicula quis ac massa. Nunc vel ipsum arcu. Sed ut ornare est, quis varius mauris. Quisque malesuada lacinia est. Suspendisse feugiat consectetur justo, non venenatis ipsum semper vel.
      
      Vivamus faucibus volutpat lorem quis mattis. Aliquam aliquet tortor nec tempus cursus. Nulla facilisi. Praesent mauris justo, pulvinar at ultrices in, imperdiet at ipsum. Quisque nisl lectus, vehicula sodales faucibus cursus, tincidunt at nisl. Donec sed ornare erat, a mollis mauris. Nam semper sodales maximus. Aenean in urna cursus, convallis erat vel, vehicula odio.`,
      date: "04/04/2023"
    },
  ])

  function editPost(id,title,content){
    const postIndex = posts.value.findIndex((post => post.id == id))
    posts.value[postIndex].title = title
    posts.value[postIndex].content = content
  }

  function deletePost(id){
    posts.value = posts.value.filter(post => post.id !== id)
  }

  function addPost(id,title,content,date){
    posts.value.unshift({
      id,
      title,
      content,
      date
    })
  }

  return { posts, editPost, deletePost, addPost }
})
