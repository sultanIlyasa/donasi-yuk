-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Des 2022 pada 17.15
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donasiyuk`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `donasi`
--

CREATE TABLE `donasi` (
  `id` int(11) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sedekah`
--

CREATE TABLE `sedekah` (
  `id` int(11) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_donasi`
--

CREATE TABLE `transaksi_donasi` (
  `id` int(11) NOT NULL,
  `id_donasi` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_sedekah`
--

CREATE TABLE `transaksi_sedekah` (
  `id` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_zakat`
--

CREATE TABLE `transaksi_zakat` (
  `id` int(11) NOT NULL,
  `jenis` varchar(30) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `no` varchar(15) NOT NULL,
  `jk` varchar(15) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `id_donasi` int(11) NOT NULL,
  `id_zakat` int(11) NOT NULL,
  `id_sedekah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `zakat`
--

CREATE TABLE `zakat` (
  `id` int(11) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `donasi`
--
ALTER TABLE `donasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sedekah`
--
ALTER TABLE `sedekah`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaksi_donasi`
--
ALTER TABLE `transaksi_donasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaksi_sedekah`
--
ALTER TABLE `transaksi_sedekah`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaksi_zakat`
--
ALTER TABLE `transaksi_zakat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `zakat`
--
ALTER TABLE `zakat`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
