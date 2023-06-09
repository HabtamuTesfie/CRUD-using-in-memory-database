//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
//------------------------------------------------------------------------------
/**
 * Employee data.
 */
//------------------------------------------------------------------------------
export class Employee
{
  id:         number;
  firstName:  string;
  lastName:   string;
  gender?:    string;
  birthDate?: Date;
  email:      string;
  active:     boolean;
} // Employee


//------------------------------------------------------------------------------
/**
 * Candidate data.
 */
//------------------------------------------------------------------------------
export class Candidate
{
  id:             number;
  firstName:      string;
  lastName:       string;
  email:          string;
  gender:         string;
  birthDate:      string;
  expectedSalary: string;
  phone:          string;
} // Candidate


//------------------------------------------------------------------------------
/**
 * Department data.
 */
//------------------------------------------------------------------------------
export class Department
{
  id:   number;
  name: string;
} // Department


//------------------------------------------------------------------------------
/**
 * Company data.
 */
//------------------------------------------------------------------------------
export class Company
{
  id:       number;
  name:     string;
  location: string;
  email:    string;
} // Company