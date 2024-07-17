-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema helpdesk
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `helpdesk` ;

-- -----------------------------------------------------
-- Schema helpdesk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `helpdesk` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `helpdesk` ;

-- -----------------------------------------------------
-- Table `helpdesk`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `helpdesk`.`roles` ;

CREATE TABLE IF NOT EXISTS `helpdesk`.`roles` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `nombre_rol` VARCHAR(50) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_rol`),
  UNIQUE INDEX `nombre_rol` (`nombre_rol` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `helpdesk`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `helpdesk`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `id_rol` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  INDEX `id_rol` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`id_rol`)
    REFERENCES `helpdesk`.`roles` (`id_rol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`tareas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `helpdesk`.`tareas` ;

CREATE TABLE IF NOT EXISTS `helpdesk`.`tareas` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `fecha_limite` DATETIME NULL DEFAULT NULL,
  `estado` ENUM('pendiente', 'en_progreso', 'completada', 'cancelada') NOT NULL DEFAULT 'pendiente',
  `id_usuario_creador` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_tarea`),
  INDEX `id_usuario_creador` (`id_usuario_creador` ASC) VISIBLE,
  CONSTRAINT `tareas_ibfk_1`
    FOREIGN KEY (`id_usuario_creador`)
    REFERENCES `helpdesk`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`seguimiento_tareas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `helpdesk`.`seguimiento_tareas` ;

CREATE TABLE IF NOT EXISTS `helpdesk`.`seguimiento_tareas` (
  `id_seguimiento` INT NOT NULL AUTO_INCREMENT,
  `id_tarea` INT NOT NULL,
  `id_usuario_seguimiento` INT NOT NULL,
  `comentario` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_seguimiento`),
  INDEX `id_tarea` (`id_tarea` ASC) VISIBLE,
  INDEX `id_usuario_seguimiento` (`id_usuario_seguimiento` ASC) VISIBLE,
  CONSTRAINT `seguimiento_tareas_ibfk_1`
    FOREIGN KEY (`id_tarea`)
    REFERENCES `helpdesk`.`tareas` (`id_tarea`),
  CONSTRAINT `seguimiento_tareas_ibfk_2`
    FOREIGN KEY (`id_usuario_seguimiento`)
    REFERENCES `helpdesk`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
