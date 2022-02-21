-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Fev-2022 às 19:08
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `losango`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `data_nasc` date DEFAULT NULL,
  `nome_mae` varchar(150) DEFAULT NULL,
  `cpf_mae` varchar(14) DEFAULT NULL,
  `nome_pai` varchar(150) DEFAULT NULL,
  `cpf_pai` varchar(14) DEFAULT NULL,
  `id_turma` int(11) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `alunos`
--

INSERT INTO `alunos` (`id`, `nome`, `cpf`, `data_nasc`, `nome_mae`, `cpf_mae`, `nome_pai`, `cpf_pai`, `id_turma`, `data_cadastro`, `status`) VALUES
(1, 'name', '13316269606', '2020-01-20', 'nome', '13316269606', 'nome', '13316269606', 1, '2022-02-07 15:07:25', 1),
(2, 'teste233', '11111111111', '2021-10-02', 'teste', 'testeeeeeee', 'teste', 'testeeeeeee', 1, '2022-02-19 04:11:08', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `atividades`
--

CREATE TABLE `atividades` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `atividades_diario_aluno`
--

CREATE TABLE `atividades_diario_aluno` (
  `id` int(11) NOT NULL,
  `id_atividades` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `participacao` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `calendario`
--

CREATE TABLE `calendario` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `diarios`
--

CREATE TABLE `diarios` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `id_professor` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `diarios`
--

INSERT INTO `diarios` (`id`, `descricao`, `id_aluno`, `id_professor`, `data_cadastro`, `status`) VALUES
(1, 'teste233', 1, 1, '2022-02-19 04:07:55', 1),
(4, 'teste', 1, 2, '2022-02-19 04:14:18', 1),
(5, 'teste', 2, 2, '2022-02-19 04:14:24', 1),
(6, 'teste', 2, 1, '2022-02-19 04:14:30', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `evacuacao`
--

CREATE TABLE `evacuacao` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evacuacao_diario_aluno`
--

CREATE TABLE `evacuacao_diario_aluno` (
  `id` int(11) NOT NULL,
  `id_evacuacao` int(11) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `aparencia` varchar(20) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `data_evento` date NOT NULL,
  `id_calendario` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `imagem` varchar(150) DEFAULT NULL,
  `id_galeria` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `galerias`
--

CREATE TABLE `galerias` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `informacoes_casa_diario_aluno`
--

CREATE TABLE `informacoes_casa_diario_aluno` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `medicamentos`
--

CREATE TABLE `medicamentos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `periodo` varchar(100) DEFAULT NULL,
  `horarios` varchar(100) DEFAULT NULL,
  `foto_receita` varchar(100) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `imagem` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `notificacoes`
--

CREATE TABLE `notificacoes` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `notificacoes`
--

INSERT INTO `notificacoes` (`id`, `descricao`, `id_usuario`, `data_cadastro`, `status`) VALUES
(1, 'teste', 1, '2022-02-18 21:15:07', 1),
(2, 'teste2', 1, '2022-02-18 21:15:16', 1),
(7, 'teste233', 1, '2022-02-18 21:24:27', 1),
(11, 'teste233', 2, '2022-02-18 21:54:11', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `observacoes_diario_aluno`
--

CREATE TABLE `observacoes_diario_aluno` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `problemas_saude_aluno`
--

CREATE TABLE `problemas_saude_aluno` (
  `id` int(11) NOT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `tratamento` varchar(250) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `professores`
--

CREATE TABLE `professores` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `professores`
--

INSERT INTO `professores` (`id`, `nome`, `cpf`, `email`, `data_cadastro`, `status`) VALUES
(1, 'nome', '11111111111', 'email@email.com', '2022-02-04 23:18:15', 1),
(2, 'teste233', '11111111111', 'email@gmail.com', '2022-02-19 04:12:10', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `recados`
--

CREATE TABLE `recados` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_professor` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `recados`
--

INSERT INTO `recados` (`id`, `descricao`, `id_usuario`, `id_professor`, `data_cadastro`, `status`) VALUES
(1, 'teste233', 1, 1, '2022-02-18 22:30:13', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `recados_respostas`
--

CREATE TABLE `recados_respostas` (
  `id` int(11) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `id_recado` int(11) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `refeicoes`
--

CREATE TABLE `refeicoes` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `refeicoes`
--

INSERT INTO `refeicoes` (`id`, `descricao`, `data_cadastro`, `status`) VALUES
(1, 'teste233', '2022-02-19 03:33:38', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `refeicoes_diario_aluno`
--

CREATE TABLE `refeicoes_diario_aluno` (
  `id` int(11) NOT NULL,
  `id_refeicoes` int(11) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `nota` int(11) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `saude`
--

CREATE TABLE `saude` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `saude`
--

INSERT INTO `saude` (`id`, `descricao`, `data_cadastro`, `status`) VALUES
(1, 'teste233', '2022-02-19 03:40:27', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saude_diario_aluno`
--

CREATE TABLE `saude_diario_aluno` (
  `id` int(11) NOT NULL,
  `id_saude` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL,
  `id_diario` int(11) DEFAULT NULL,
  `situacao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turmas`
--

CREATE TABLE `turmas` (
  `id` int(11) NOT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `turmas`
--

INSERT INTO `turmas` (`id`, `descricao`, `data_cadastro`, `status`) VALUES
(1, 'TESTE', '2022-02-03 03:00:00', 1),
(2, 'teste', '2022-02-04 00:45:46', 1),
(3, 'teste233', '2022-02-19 03:47:29', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `senha` varchar(300) DEFAULT NULL,
  `cpf_filho` varchar(14) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `cpf`, `email`, `telefone`, `usuario`, `senha`, `cpf_filho`, `data_cadastro`, `status`) VALUES
(1, 'Tulio Vasconcelos Silva', '13316269606', 'tuliovst@gmail.com', '037991192779', 'tulio', '8108bde6be9be2877f4136f12222dc02', '13316269606', '2022-02-07 15:08:30', 1),
(2, 'Tulio Vasconcelos ', '13316269606', 'tuliovst@gmail.com', '037991192779', 'tulio', '8108bde6be9be2877f4136f12222dc02', '13316269606', '2022-02-18 21:16:03', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_turma` (`id_turma`);

--
-- Índices para tabela `atividades`
--
ALTER TABLE `atividades`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `atividades_diario_aluno`
--
ALTER TABLE `atividades_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_atividades` (`id_atividades`),
  ADD KEY `fk_aluno` (`id_aluno`),
  ADD KEY `fk_diario` (`id_diario`);

--
-- Índices para tabela `calendario`
--
ALTER TABLE `calendario`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `diarios`
--
ALTER TABLE `diarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_aluno_diario` (`id_aluno`),
  ADD KEY `fk_professor_diario` (`id_professor`);

--
-- Índices para tabela `evacuacao`
--
ALTER TABLE `evacuacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `evacuacao_diario_aluno`
--
ALTER TABLE `evacuacao_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_aluno_evacuacao` (`id_aluno`),
  ADD KEY `fk_evacuacao` (`id_evacuacao`),
  ADD KEY `fk_diario_evacuacao` (`id_diario`);

--
-- Índices para tabela `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_calendario` (`id_calendario`);

--
-- Índices para tabela `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_galeria_foto` (`id_galeria`);

--
-- Índices para tabela `galerias`
--
ALTER TABLE `galerias`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `informacoes_casa_diario_aluno`
--
ALTER TABLE `informacoes_casa_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_info_diar` (`id_diario`),
  ADD KEY `fk_info_al` (`id_aluno`);

--
-- Índices para tabela `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_med_aluno` (`id_aluno`);

--
-- Índices para tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`id_usuario`);

--
-- Índices para tabela `observacoes_diario_aluno`
--
ALTER TABLE `observacoes_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_obs_aluno` (`id_aluno`),
  ADD KEY `fk_obs_diario` (`id_diario`);

--
-- Índices para tabela `problemas_saude_aluno`
--
ALTER TABLE `problemas_saude_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prob_aluno` (`id_aluno`);

--
-- Índices para tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `recados`
--
ALTER TABLE `recados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rec_u` (`id_usuario`),
  ADD KEY `fk_rec_profe` (`id_professor`);

--
-- Índices para tabela `recados_respostas`
--
ALTER TABLE `recados_respostas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_recado` (`id_recado`);

--
-- Índices para tabela `refeicoes`
--
ALTER TABLE `refeicoes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `refeicoes_diario_aluno`
--
ALTER TABLE `refeicoes_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ref_diario` (`id_diario`),
  ADD KEY `fk_ref_di_aluno` (`id_aluno`);

--
-- Índices para tabela `saude`
--
ALTER TABLE `saude`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `saude_diario_aluno`
--
ALTER TABLE `saude_diario_aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_saude_alun` (`id_aluno`),
  ADD KEY `fk_saude_diar` (`id_diario`);

--
-- Índices para tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `atividades`
--
ALTER TABLE `atividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `atividades_diario_aluno`
--
ALTER TABLE `atividades_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `calendario`
--
ALTER TABLE `calendario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `diarios`
--
ALTER TABLE `diarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `evacuacao`
--
ALTER TABLE `evacuacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evacuacao_diario_aluno`
--
ALTER TABLE `evacuacao_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `galerias`
--
ALTER TABLE `galerias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `informacoes_casa_diario_aluno`
--
ALTER TABLE `informacoes_casa_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `medicamentos`
--
ALTER TABLE `medicamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `observacoes_diario_aluno`
--
ALTER TABLE `observacoes_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `problemas_saude_aluno`
--
ALTER TABLE `problemas_saude_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `professores`
--
ALTER TABLE `professores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `recados`
--
ALTER TABLE `recados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `recados_respostas`
--
ALTER TABLE `recados_respostas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `refeicoes`
--
ALTER TABLE `refeicoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `refeicoes_diario_aluno`
--
ALTER TABLE `refeicoes_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `saude`
--
ALTER TABLE `saude`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `saude_diario_aluno`
--
ALTER TABLE `saude_diario_aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `fk_turma` FOREIGN KEY (`id_turma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `atividades_diario_aluno`
--
ALTER TABLE `atividades_diario_aluno`
  ADD CONSTRAINT `fk_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_atividades` FOREIGN KEY (`id_atividades`) REFERENCES `atividades` (`id`),
  ADD CONSTRAINT `fk_diario` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`);

--
-- Limitadores para a tabela `diarios`
--
ALTER TABLE `diarios`
  ADD CONSTRAINT `fk_aluno_diario` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_professor_diario` FOREIGN KEY (`id_professor`) REFERENCES `professores` (`id`);

--
-- Limitadores para a tabela `evacuacao_diario_aluno`
--
ALTER TABLE `evacuacao_diario_aluno`
  ADD CONSTRAINT `fk_aluno_evacuacao` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_aluno_evacuacao_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `atividades` (`id`),
  ADD CONSTRAINT `fk_diario_evacuacao` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`),
  ADD CONSTRAINT `fk_evacuacao` FOREIGN KEY (`id_evacuacao`) REFERENCES `evacuacao` (`id`);

--
-- Limitadores para a tabela `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `fk_calendario` FOREIGN KEY (`id_calendario`) REFERENCES `calendario` (`id`),
  ADD CONSTRAINT `fk_calendario_eventos` FOREIGN KEY (`id_calendario`) REFERENCES `calendario` (`id`);

--
-- Limitadores para a tabela `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `fk_galeria_foto` FOREIGN KEY (`id_galeria`) REFERENCES `galerias` (`id`);

--
-- Limitadores para a tabela `informacoes_casa_diario_aluno`
--
ALTER TABLE `informacoes_casa_diario_aluno`
  ADD CONSTRAINT `fk_info_al` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_info_diar` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`),
  ADD CONSTRAINT `fk_info_diario` FOREIGN KEY (`id_diario`) REFERENCES `alunos` (`id`);

--
-- Limitadores para a tabela `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD CONSTRAINT `fk_med_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`);

--
-- Limitadores para a tabela `notificacoes`
--
ALTER TABLE `notificacoes`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Limitadores para a tabela `observacoes_diario_aluno`
--
ALTER TABLE `observacoes_diario_aluno`
  ADD CONSTRAINT `fk_obs_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_obs_diario` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`);

--
-- Limitadores para a tabela `problemas_saude_aluno`
--
ALTER TABLE `problemas_saude_aluno`
  ADD CONSTRAINT `fk_prob_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`);

--
-- Limitadores para a tabela `recados`
--
ALTER TABLE `recados`
  ADD CONSTRAINT `fk_rec_profe` FOREIGN KEY (`id_professor`) REFERENCES `professores` (`id`),
  ADD CONSTRAINT `fk_rec_u` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_rec_user` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Limitadores para a tabela `recados_respostas`
--
ALTER TABLE `recados_respostas`
  ADD CONSTRAINT `fk_recado` FOREIGN KEY (`id_recado`) REFERENCES `recados` (`id`);

--
-- Limitadores para a tabela `refeicoes_diario_aluno`
--
ALTER TABLE `refeicoes_diario_aluno`
  ADD CONSTRAINT `fk_ref_alun` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_ref_di_aluno` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_ref_diario` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`);

--
-- Limitadores para a tabela `saude_diario_aluno`
--
ALTER TABLE `saude_diario_aluno`
  ADD CONSTRAINT `fk_saude_alun` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `fk_saude_diar` FOREIGN KEY (`id_diario`) REFERENCES `diarios` (`id`),
  ADD CONSTRAINT `fk_saude_saude` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
