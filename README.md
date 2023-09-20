# Multiple Step Form

Reno Fathoni
Tech Stack: React, React Hook Form, Styled Component

Live: https://jakmall-test-jayfl255f-renofathoni23.vercel.app/

## Penjelasan singkat

Multiple Step Form Jakmall adalah form yang digunakan untuk mengumpulkan informasi mengenai pengiriman suatu barang. Form ini merupakan form multistep sehingga akan terdapat beberapa halaman pada form tersebut.

## Penggunaan dan Langkah-langkah

1. Mengisi form pada halaman pertama. Field yang wajib diisi adalah form Delivery Address dan field dropshipper serta dropshipper phone number jika pengguna menceklis checkbox 'Send as Dropshipper'. Jika belum valid, maka Button akan disabled, namun jika pengisian sudah valid, maka dapat mengklik button dan melanjutkan tahap selanjutnya.

2. Pada step ke 2, terdapat pilihan shipment dan payment yang harus dipilih oleh pengguna, jika tidak dipilih maka pengguna tidak dapat melanjutkan ke tahap selanjutnya, maka dari itu button tidak akan muncul terlebih dahulu. Jika kedua bagian tersebut sudah diisi, maka akan muncul button dan dapat diklik oleh pengguna untuk ke tahap selanjutnya.

3. Pada step ke 3, hanya terdapat informasi mengenai form yang telah diisi dan juga terdapat informasi mengenai ID dari order tersebut. Jika pengguna mengklik "Go to Homepage" maka pengguna akan dikembalikan ke halaman pertama dan isian form akan ter reset.

## Informasi lainnya

- Menggunakan localStorage untuk menyimpan values form ketika reload page
- Masih terdapat beberapa bug seperti cost yang akan kembali ke state awal jika page ke reload walaupun checkbox dropshipper tetap terceklis.
- Beberapa tampilan UI tidak sama dengan yang ada di Figma, contohnya bagian summary, input pada form step 1 dan warna checkbox.
- Form sudah mobile responsive namun belum responsive jika max-width media queries lebih dari 768px.

## Penjelasan Project Structure

### Components

Terdapat 3 folder, yaitu Form, Summary, dan juga Symbols

#### Form

- Berisikan komponen-komponen yang ada pada form seperti form step 1, step 2, step 2, bagian summary dan juga step navigator.

#### Summary

- Berisikan komponen-komponen kecil yang akan digunakan pada bagian summary.

#### Symbols

- Berisikan komponen-komponen reusable yang digunakan pada setiap step form yang ada.

### Store

Tempat penyimpanan file untuk state management, pada kasus ini developer menggunakan react state management useContext.

### Utils

Tempat untuk menyimpan file yang berguna untuk alat bantu. Pada kasus ini developer menyimpan media queries untuk kebutuhan styling mobile responsive.

## Informasi lainnya mengenai developer

- Pertama kali memakai/mengimplementasikan react hook form dan juga styled component.

Please provide your feedback about my work to help me improve, thank you :)
