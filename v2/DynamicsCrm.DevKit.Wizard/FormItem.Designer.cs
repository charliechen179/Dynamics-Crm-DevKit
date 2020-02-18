﻿namespace DynamicsCrm.DevKit.Wizard
{
    partial class FormItem
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.buttonConnection = new System.Windows.Forms.Button();
            this.link = new System.Windows.Forms.LinkLabel();
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.comboBoxWebResource = new System.Windows.Forms.ComboBox();
            this.checkBoxDebug = new System.Windows.Forms.CheckBox();
            this.comboBoxEntity = new System.Windows.Forms.ComboBox();
            this.comboBoxCrmName = new System.Windows.Forms.ComboBox();
            this.labelCrmName = new System.Windows.Forms.Label();
            this.labelItemName = new System.Windows.Forms.Label();
            this.textItemName = new System.Windows.Forms.TextBox();
            this.labelItem = new System.Windows.Forms.Label();
            this.buttonOk = new System.Windows.Forms.Button();
            this.buttonCancel = new System.Windows.Forms.Button();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // progressBar
            // 
            this.progressBar.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.progressBar.Location = new System.Drawing.Point(3, 110);
            this.progressBar.Margin = new System.Windows.Forms.Padding(0);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(510, 4);
            this.progressBar.TabIndex = 1;
            // 
            // buttonConnection
            // 
            this.buttonConnection.Location = new System.Drawing.Point(533, 0);
            this.buttonConnection.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonConnection.Name = "buttonConnection";
            this.buttonConnection.Size = new System.Drawing.Size(125, 36);
            this.buttonConnection.TabIndex = 0;
            this.buttonConnection.Text = "Co&nnection";
            this.buttonConnection.UseVisualStyleBackColor = true;
            this.buttonConnection.Click += new System.EventHandler(this.buttonConnection_Click);
            // 
            // link
            // 
            this.link.Location = new System.Drawing.Point(0, 0);
            this.link.Margin = new System.Windows.Forms.Padding(0);
            this.link.Name = "link";
            this.link.Padding = new System.Windows.Forms.Padding(13, 0, 0, 0);
            this.link.Size = new System.Drawing.Size(360, 23);
            this.link.TabIndex = 4;
            this.link.TabStop = true;
            this.link.Text = "WIKI: Add new WebResource Project";
            this.link.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.link.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.link_LinkClicked);
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.comboBoxWebResource);
            this.groupBox.Controls.Add(this.checkBoxDebug);
            this.groupBox.Controls.Add(this.comboBoxEntity);
            this.groupBox.Controls.Add(this.comboBoxCrmName);
            this.groupBox.Controls.Add(this.labelCrmName);
            this.groupBox.Controls.Add(this.labelItemName);
            this.groupBox.Controls.Add(this.textItemName);
            this.groupBox.Controls.Add(this.labelItem);
            this.groupBox.Controls.Add(this.progressBar);
            this.groupBox.Location = new System.Drawing.Point(8, 20);
            this.groupBox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox.Name = "groupBox";
            this.groupBox.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox.Size = new System.Drawing.Size(516, 116);
            this.groupBox.TabIndex = 5;
            this.groupBox.TabStop = false;
            // 
            // comboBoxWebResource
            // 
            this.comboBoxWebResource.Enabled = false;
            this.comboBoxWebResource.FormattingEnabled = true;
            this.comboBoxWebResource.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxWebResource.Location = new System.Drawing.Point(135, 15);
            this.comboBoxWebResource.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.comboBoxWebResource.Name = "comboBoxWebResource";
            this.comboBoxWebResource.Size = new System.Drawing.Size(361, 24);
            this.comboBoxWebResource.TabIndex = 6;
            this.comboBoxWebResource.Visible = false;
            this.comboBoxWebResource.SelectedIndexChanged += new System.EventHandler(this.ComboBoxWebResource_SelectedIndexChanged);
            this.comboBoxWebResource.TextChanged += new System.EventHandler(this.ComboBoxWebResource_TextChanged);
            // 
            // checkBoxDebug
            // 
            this.checkBoxDebug.AutoSize = true;
            this.checkBoxDebug.Enabled = false;
            this.checkBoxDebug.Location = new System.Drawing.Point(412, 41);
            this.checkBoxDebug.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.checkBoxDebug.Name = "checkBoxDebug";
            this.checkBoxDebug.Size = new System.Drawing.Size(79, 21);
            this.checkBoxDebug.TabIndex = 5;
            this.checkBoxDebug.Text = "DEBUG";
            this.checkBoxDebug.UseVisualStyleBackColor = true;
            this.checkBoxDebug.Visible = false;
            // 
            // comboBoxEntity
            // 
            this.comboBoxEntity.Enabled = false;
            this.comboBoxEntity.FormattingEnabled = true;
            this.comboBoxEntity.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxEntity.Location = new System.Drawing.Point(135, 15);
            this.comboBoxEntity.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.comboBoxEntity.Name = "comboBoxEntity";
            this.comboBoxEntity.Size = new System.Drawing.Size(361, 24);
            this.comboBoxEntity.TabIndex = 4;
            this.comboBoxEntity.Visible = false;
            this.comboBoxEntity.SelectedIndexChanged += new System.EventHandler(this.comboBoxEntity_SelectedIndexChanged);
            this.comboBoxEntity.TextUpdate += new System.EventHandler(this.comboBoxEntity_TextUpdate);
            // 
            // comboBoxCrmName
            // 
            this.comboBoxCrmName.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxCrmName.Enabled = false;
            this.comboBoxCrmName.FormattingEnabled = true;
            this.comboBoxCrmName.Items.AddRange(new object[] {
            "Dynamics 365",
            "Dynamics Crm 2016",
            "Dynamics Crm 2015",
            "Dynamics Crm 2013",
            "Dynamics Crm 2011",
            "Dynamics Crm 4.0"});
            this.comboBoxCrmName.Location = new System.Drawing.Point(135, 76);
            this.comboBoxCrmName.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.comboBoxCrmName.Name = "comboBoxCrmName";
            this.comboBoxCrmName.Size = new System.Drawing.Size(361, 24);
            this.comboBoxCrmName.TabIndex = 2;
            // 
            // labelCrmName
            // 
            this.labelCrmName.AutoSize = true;
            this.labelCrmName.Location = new System.Drawing.Point(8, 79);
            this.labelCrmName.Name = "labelCrmName";
            this.labelCrmName.Size = new System.Drawing.Size(102, 17);
            this.labelCrmName.TabIndex = 3;
            this.labelCrmName.Text = "Dynamics Crm:";
            // 
            // labelItemName
            // 
            this.labelItemName.AutoSize = true;
            this.labelItemName.Location = new System.Drawing.Point(116, 41);
            this.labelItemName.Name = "labelItemName";
            this.labelItemName.Size = new System.Drawing.Size(0, 17);
            this.labelItemName.TabIndex = 2;
            // 
            // textItemName
            // 
            this.textItemName.Enabled = false;
            this.textItemName.Location = new System.Drawing.Point(135, 15);
            this.textItemName.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.textItemName.Name = "textItemName";
            this.textItemName.Size = new System.Drawing.Size(361, 22);
            this.textItemName.TabIndex = 1;
            this.textItemName.TextChanged += new System.EventHandler(this.textItemName_TextChanged);
            // 
            // labelItem
            // 
            this.labelItem.AutoSize = true;
            this.labelItem.Location = new System.Drawing.Point(8, 17);
            this.labelItem.Name = "labelItem";
            this.labelItem.Size = new System.Drawing.Size(79, 17);
            this.labelItem.TabIndex = 0;
            this.labelItem.Text = "Item Name:";
            // 
            // buttonOk
            // 
            this.buttonOk.Enabled = false;
            this.buttonOk.Location = new System.Drawing.Point(533, 59);
            this.buttonOk.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonOk.Name = "buttonOk";
            this.buttonOk.Size = new System.Drawing.Size(125, 36);
            this.buttonOk.TabIndex = 3;
            this.buttonOk.Text = "&OK";
            this.buttonOk.UseVisualStyleBackColor = true;
            this.buttonOk.Click += new System.EventHandler(this.buttonOk_Click);
            // 
            // buttonCancel
            // 
            this.buttonCancel.Location = new System.Drawing.Point(533, 100);
            this.buttonCancel.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.buttonCancel.Name = "buttonCancel";
            this.buttonCancel.Size = new System.Drawing.Size(125, 36);
            this.buttonCancel.TabIndex = 4;
            this.buttonCancel.Text = "&Cancel";
            this.buttonCancel.UseVisualStyleBackColor = true;
            this.buttonCancel.Click += new System.EventHandler(this.buttonancel_Click);
            // 
            // FormItem
            // 
            this.AcceptButton = this.buttonOk;
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.ClientSize = new System.Drawing.Size(658, 148);
            this.ControlBox = false;
            this.Controls.Add(this.buttonConnection);
            this.Controls.Add(this.buttonCancel);
            this.Controls.Add(this.buttonOk);
            this.Controls.Add(this.groupBox);
            this.Controls.Add(this.link);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormItem";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "DynamicsCrm.DevKit - v.";
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.Button buttonConnection;
        private System.Windows.Forms.LinkLabel link;
        private System.Windows.Forms.GroupBox groupBox;
        private System.Windows.Forms.TextBox textItemName;
        private System.Windows.Forms.Label labelItem;
        private System.Windows.Forms.Label labelItemName;
        private System.Windows.Forms.ComboBox comboBoxCrmName;
        private System.Windows.Forms.Label labelCrmName;
        private System.Windows.Forms.Button buttonOk;
        private System.Windows.Forms.Button buttonCancel;
        private System.Windows.Forms.ComboBox comboBoxEntity;
        private System.Windows.Forms.CheckBox checkBoxDebug;
        private System.Windows.Forms.ComboBox comboBoxWebResource;
    }
}
