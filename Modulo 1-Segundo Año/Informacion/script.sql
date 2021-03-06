USE [master]
GO
/****** Object:  Database [MyPet]    Script Date: 17/11/2021 17:36:39 ******/
CREATE DATABASE [MyPet]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MyPet', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MyPet.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MyPet_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MyPet_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MyPet] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MyPet].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MyPet] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MyPet] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MyPet] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MyPet] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MyPet] SET ARITHABORT OFF 
GO
ALTER DATABASE [MyPet] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MyPet] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MyPet] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MyPet] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MyPet] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MyPet] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MyPet] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MyPet] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MyPet] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MyPet] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MyPet] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MyPet] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MyPet] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MyPet] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MyPet] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MyPet] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MyPet] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MyPet] SET RECOVERY FULL 
GO
ALTER DATABASE [MyPet] SET  MULTI_USER 
GO
ALTER DATABASE [MyPet] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MyPet] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MyPet] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MyPet] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MyPet] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MyPet] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MyPet', N'ON'
GO
ALTER DATABASE [MyPet] SET QUERY_STORE = OFF
GO
USE [MyPet]
GO
/****** Object:  Table [dbo].[Cat_Usuarios]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cat_Usuarios](
	[Id_Categoria] [int] NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Cat_Usuarios] PRIMARY KEY CLUSTERED 
(
	[Id_Categoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[Id_Cliente] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[DNI] [int] NOT NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Id_Paciente] [int] NOT NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[Id_Cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Consultas]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Consultas](
	[Id_Consulta] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[email] [nchar](10) NOT NULL,
	[mensaje] [varchar](max) NOT NULL,
	[fecha] [datetime] NOT NULL,
 CONSTRAINT [PK_Consultas] PRIMARY KEY CLUSTERED 
(
	[Id_Consulta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pacientes]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pacientes](
	[Id_Paciente] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Tipo] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Pacientes] PRIMARY KEY CLUSTERED 
(
	[Id_Paciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Test]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Test](
	[IdTest] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 17/11/2021 17:36:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id_Usuarios] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[Id_Categoria] [int] NULL,
	[DNI] [bigint] NOT NULL,
	[Celular] [bigint] NOT NULL,
	[Direccion] [varchar](50) NULL,
	[Mail] [varchar](50) NOT NULL,
	[Clave] [varchar](50) NOT NULL,
	[Fecha] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id_Usuarios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cat_Usuarios] ([Id_Categoria], [Nombre]) VALUES (1, N'Administrador')
INSERT [dbo].[Cat_Usuarios] ([Id_Categoria], [Nombre]) VALUES (2, N'Veterinario')
INSERT [dbo].[Cat_Usuarios] ([Id_Categoria], [Nombre]) VALUES (3, N'Asistente')
INSERT [dbo].[Cat_Usuarios] ([Id_Categoria], [Nombre]) VALUES (4, N'Vendedor')
GO
INSERT [dbo].[Test] ([IdTest], [Nombre]) VALUES (1, N'Juan')
INSERT [dbo].[Test] ([IdTest], [Nombre]) VALUES (2, N'Pedro')
INSERT [dbo].[Test] ([IdTest], [Nombre]) VALUES (3, N'Juan')
GO
INSERT [dbo].[Usuarios] ([Id_Usuarios], [Nombre], [Apellido], [Id_Categoria], [DNI], [Celular], [Direccion], [Mail], [Clave], [Fecha]) VALUES (1, N'Miguel', N'Sanchez', 1, 44555666, 358125478, N'Su Casa', N'mypetgestionvet@gmail.com', N'Admin', NULL)
INSERT [dbo].[Usuarios] ([Id_Usuarios], [Nombre], [Apellido], [Id_Categoria], [DNI], [Celular], [Direccion], [Mail], [Clave], [Fecha]) VALUES (2, N'Maria', N'Risas', 3, 65879582, 3148752163, N'La Casa', N'mrisas@gmail.com', N'123456', CAST(N'2021-11-16T00:00:00.000' AS DateTime))
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD FOREIGN KEY([Id_Categoria])
REFERENCES [dbo].[Cat_Usuarios] ([Id_Categoria])
GO
USE [master]
GO
ALTER DATABASE [MyPet] SET  READ_WRITE 
GO
